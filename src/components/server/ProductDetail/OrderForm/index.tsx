import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { MouseEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as API from '@/apis/mainProducts';
import { Text } from '@/components/common';
import * as S from '@/components/server/ProductDetail/OrderForm/index.style';
import { modalStore } from '@/recoils/modal/modal';
import { stopEventDelivery } from '@/utils/utils';

const getInfos = async (path: string) => {
  const result = await axios.get<API.ProductDetail>(path);
  return result.data;
};

type DefaultAddressState = {
  [key: string]: string;
  address1: string;
  address2: string;
  zipCode: string;
};

const defaultAddress = {
  address1: '',
  address2: '',
  zipCode: '',
};

type DefaultOptionsState = {
  [key: string]: string | number;
  switch: string;
  amount: number;
};

const defaultOptions = { switch: '', amount: 1 };

export function Purchase() {
  const { daum } = window;
  const [isDisplay, setIsDisplay] = useState(false);
  const [isClicked, setIsClicked] = useRecoilState(modalStore);
  const [address, setAddress] = useState<DefaultAddressState>(defaultAddress);
  const [options, setOptions] = useState<DefaultOptionsState>(defaultOptions);

  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const productID = param.get('id');

  const detailPath = `${process.env.MAIN_PRODUCTS}/${productID}`;
  // const recommendPath = `${process.env.MAIN_PRODUCTS}/${productID}/recommendations`;
  // 서버 구현중
  const { data } = useQuery<API.ProductDetail, AxiosError>(['getInfos'], () =>
    getInfos(detailPath),
  );

  if (!data) {
    return <>에러</>;
  }

  const optionLists = data?.keyboardSwitches.map(switchOption => (
    <S.Option
      key={switchOption.id}
      onClick={() => {
        setOptions({ ...options, switch: switchOption.name });
      }}
    >
      {switchOption.name}
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

  const onClickAddress = () => {
    new daum.Postcode({
      oncomplete(userAddress: any) {
        if (userAddress.buildingName === '' && userAddress.apartment === 'N') {
          setAddress({
            ...address,
            address1: userAddress.roadAddress,
            zipCode: userAddress.zonecode,
          });
          return;
        }

        if (userAddress.bname !== '') {
          setAddress({
            ...address,
            address1: `${userAddress.roadAddress}${userAddress.roadAddress} ${userAddress.buildingName}`,
            zipCode: userAddress.zonecode,
          });
        } else {
          setAddress({
            ...address,
            address1: userAddress.roadAddress + userAddress.buildingName,
            zipCode: userAddress.zonecode,
          });
        }
      },
    }).open();
  };

  const isFormFilled =
    !Object.keys(address).find(key => !address[key]) &&
    !Object.keys(options).find(key => !options[key]);

  const postOrder = async () => {
    axios
      .post(`${process.env.ORDER_PRODUCTS}`, {
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
          address2: address.adress2,
          zipCode: address.zipCode,
        },
        totalPrice: data.discountInfoResponse.salePrice * options.amount,
      })
      .catch(e => console.error(e));
  };
  return (
    <S.Dimmed isClicked={isClicked} onClick={closeModal}>
      <S.PurchaseWrap
        onClick={e => {
          stopEventDelivery(e);
          setIsDisplay(false);
        }}
        isClicked={isClicked}
      >
        <S.InfoWrap>
          <S.InfoLeft>
            <S.ProductImage src={data.product.imageUrl} />
            <S.ProductInfo>
              <S.Title>{data.product.title}</S.Title>
              <S.Brand>{data.vendor.name}</S.Brand>
            </S.ProductInfo>
          </S.InfoLeft>
          <S.InfoRight>
            {!!data.discountInfoResponse.discounts.length && (
              <S.OriginPrice
                forwardedAs="del"
                styles={{ color: 'grey', fontSize: '10px' }}
              >
                {data.product.price.toLocaleString()}
              </S.OriginPrice>
            )}
            <S.DiscountedPrice>
              {data.discountInfoResponse.salePrice.toLocaleString()}원
            </S.DiscountedPrice>
          </S.InfoRight>
        </S.InfoWrap>
        <S.SelectWrap>
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
          </S.OptionZone>
          {options.switch && (
            <S.AmountWrap>
              <S.PlusBtn onClick={increaseAmount}>+</S.PlusBtn>
              <Text styles={{ fontSize: '15px' }}>{options.amount}</Text>
              <S.MinusBtn onClick={decreaseAmount}>-</S.MinusBtn>
            </S.AmountWrap>
          )}
        </S.SelectWrap>

        <S.UserInfo>
          <S.UserInfoTitle>사용자정보</S.UserInfoTitle>
          <S.UserInfoContent>
            주소
            <S.ChangeAddressBtn type="button" onClick={onClickAddress}>
              주소변경
            </S.ChangeAddressBtn>
          </S.UserInfoContent>

          {/* {options.amount && options.switch && (
            <button type="button" onClick={onClickAddress}>
              주소변경
            </button>
          )} */}
          <S.Address1>{address.address1}</S.Address1>
          <S.Address2
            placeholder="상세주소를 입력해주세요"
            onChange={e => {
              setAddress({ ...address, address2: e.target.value });
            }}
          />
        </S.UserInfo>
        <S.PriceAndButton>
          <S.DiscountedPrice>
            {(
              data.discountInfoResponse.salePrice * options.amount
            ).toLocaleString()}
            원
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
