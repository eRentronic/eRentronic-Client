import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as API from '@/apis/mainProducts';
import { Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import * as S from '@/components/server/ProductDetail/OrderForm/index.style';
import { useAddressApi } from '@/hooks/useAddressApi';
import { modalStore } from '@/recoils/modal/modal';
import { stopEventDelivery } from '@/utils/utils';

const getInfos = async (path: string) => {
  const result = await axios.get<API.ProductDetail>(path);
  return result.data;
};

type DefaultOptionsState = {
  [key: string]: string | number;
  switch: string;
  amount: number;
};

const defaultOptions: DefaultOptionsState = { switch: '', amount: 1 };

type OrderResponseState = {
  id: number;
  message: string;
};

const defaultOrderResponse: OrderResponseState = {
  id: 0,
  message: '',
};

const getValue = (e: ChangeEvent<HTMLInputElement>) => e.target.value;

export function Purchase() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isClicked, setIsClicked] = useRecoilState(modalStore);
  const [orderResponse, setOrderResponse] = useState(defaultOrderResponse);
  const [options, setOptions] = useState(defaultOptions);
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const productID = param.get('id');
  const { address, reset, addressControll, setDetailAddress } = useAddressApi();

  const detailPath = `${process.env.PRODUCT}/${productID}`;
  // const recommendPath = `${process.env.MAIN_PRODUCTS}/${productID}/recommendations`;
  // 서버 구현중
  const { data } = useQuery<API.ProductDetail, AxiosError>(['getInfos'], () =>
    getInfos(detailPath),
  );

  const onChangeAddress2 = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = getValue(e);
    setDetailAddress(inputValue);
  };

  useEffect(() => {
    setTimeout(() => {
      setOptions(defaultOptions);
      reset();
      setOrderResponse(defaultOrderResponse);
      setIsClicked(false);
    }, 2000);
  }, [orderResponse]);

  if (!data) {
    return <>에러</>;
  }

  const optionLists = data?.keyboardSwitches.map(({ id, name }) => (
    <S.Option
      key={id}
      onClick={() => {
        setOptions({ ...options, switch: name });
      }}
    >
      {name}
    </S.Option>
  ));

  const closeModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
    setIsDisplay(false);
  };

  const increaseAmount = () => {
    if (options.amount < data?.product.quantity) {
      setOptions({ ...options, amount: options.amount + 1 });
    }
  };

  const decreaseAmount = () => {
    if (options.amount > 1) {
      setOptions({ ...options, amount: options.amount - 1 });
    }
  };

  const isFormFilled =
    !Object.keys(address).find(key => !address[key]) &&
    !Object.keys(options).find(key => !options[key]);

  const postOrder = async () => {
    try {
      const {
        data: { id, message },
      } = await axios.post(`${process.env.ORDER_PRODUCTS}`, {
        purchases: [
          {
            productId: data.product.id,
            quantity: options.amount,
            productTotalPrice: data.product.price,
          },
        ],
        rentals: [],
        address: {
          fullAddress: address.address1 + address.address2,
          address1: address.address1,
          address2: address.address2,
          zipCode: address.zipCode,
        },
        totalPrice: data.discountInfoResponse.salePrice * options.amount,
      });

      setOrderResponse({ id, message });
    } catch (e) {
      console.error(e);
    }
  };

  const setAddressErrorMsg = (inputValue: string) =>
    inputValue.length < 5 ? 'wrongAddress' : '';

  const errMessage = setAddressErrorMsg(address.address2);

  const content = '주소';
  return (
    <S.Dimmed isClicked={isClicked} onClick={closeModal}>
      <S.PurchaseWrap
        onClick={e => {
          stopEventDelivery(e);
          setIsDisplay(false);
        }}
        isClicked={isClicked}
      >
        {!!orderResponse.message && (
          <S.OrderConfirmation>{orderResponse.message}</S.OrderConfirmation>
        )}
        <S.InfoWrap>
          <S.ProductImage src={data.product.imageUrl} />
          <S.ProductDetail>
            <S.InfoLeft>
              <S.ProductInfo>
                <S.Title>{data.product.title}</S.Title>
                <S.Brand>{data.vendor.name}</S.Brand>
              </S.ProductInfo>
            </S.InfoLeft>
            <S.InfoRight>
              <S.PriceCompare>
                {!!data.discountInfoResponse.discounts.length && (
                  <S.OriginPrice
                    styles={{ color: 'grey', fontSize: '10px' }}
                    forwardedAs="del"
                  >
                    {data.product.price.toLocaleString()}
                  </S.OriginPrice>
                )}
                <S.DiscountedPrice>
                  {`${data.discountInfoResponse.salePrice.toLocaleString()} 원`}
                </S.DiscountedPrice>
              </S.PriceCompare>

              {!!data.discountInfoResponse.discounts.length && (
                <S.DiscountRate color="warning">
                  {data.discountInfoResponse.discounts.length &&
                    `${
                      data.discountInfoResponse.discounts.reduce(
                        (acc, curr) => {
                          return {
                            ...acc,
                            saleRate: String(+acc.saleRate + +curr.saleRate),
                          };
                        },
                      ).saleRate
                    }%`}
                </S.DiscountRate>
              )}
            </S.InfoRight>
          </S.ProductDetail>
        </S.InfoWrap>
        <S.OptionZone>
          <S.DetailOptionBtn
            onClick={e => {
              setIsDisplay(true);
              e.stopPropagation();
            }}
          >
            <Text typography="Light" styles={{ fontSize: '9px' }}>
              option
            </Text>
          </S.DetailOptionBtn>
          <Text typography="Light">{options.switch}</Text>
          {isDisplay && (
            <S.OptionList isDisplay={isDisplay}>{optionLists}</S.OptionList>
          )}
          {options.switch && (
            <S.AmountWrap>
              <S.PlusBtn onClick={increaseAmount}>+</S.PlusBtn>
              <Text styles={{ fontSize: '15px' }}>{options.amount}</Text>
              <S.MinusBtn onClick={decreaseAmount}>-</S.MinusBtn>
            </S.AmountWrap>
          )}
        </S.OptionZone>

        {options.amount && options.switch && (
          <S.UserInfo>
            <S.UserInfoTitle>사용자정보</S.UserInfoTitle>
            <S.UserInfoContent>
              주소
              <S.ChangeAddressBtn type="button" onClick={addressControll}>
                {address.address1 ? '주소변경' : '주소선택'}
              </S.ChangeAddressBtn>
            </S.UserInfoContent>
            <S.Address1>{address.address1}</S.Address1>
            <S.Address2
              placeholder="상세주소를 입력해주세요"
              onChange={onChangeAddress2}
            />
            {errMessage && <Caution content={content} message={errMessage} />}
          </S.UserInfo>
        )}
        <S.PriceAndButton>
          <S.DiscountedPrice>
            {`총 ${(
              data.discountInfoResponse.salePrice * options.amount
            ).toLocaleString()} 원`}
          </S.DiscountedPrice>
          <S.PurchaseButton
            disabled={!isFormFilled}
            isFormFilled={isFormFilled}
            onClick={postOrder}
          >
            <Text>구매</Text>
          </S.PurchaseButton>
        </S.PriceAndButton>
      </S.PurchaseWrap>
    </S.Dimmed>
  );
}
