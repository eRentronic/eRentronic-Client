import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { MouseEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as API from '@/apis/mainProducts';
import { Text } from '@/components/common';
import * as S from '@/components/server/Purchase/style.index';
import { modalStore } from '@/recoils/modal/modal';
import { stopEventDelivery } from '@/utils/utils';

const getInfos = async (path: string) => {
  // id를 살려야 하나? 의논해보기
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
              <S.OriginPrice forwardedAs="del" styles={{ color: 'grey' }}>
                {data.discountInfoResponse.salePrice}
              </S.OriginPrice>
            )}
            <S.DiscountedPrice>{data.product.price}</S.DiscountedPrice>
          </S.InfoRight>
        </S.InfoWrap>
        <S.SelectWrap>
          옵션 목록
          <div>
            현재 옵션: 현재 옵션
            <S.DetailOptionBtn
              onClick={e => {
                setIsDisplay(true);
                e.stopPropagation();
              }}
            >
              드롭 다운 버튼
            </S.DetailOptionBtn>
            <S.OptionList isDisplay={isDisplay}>{optionLists}</S.OptionList>
          </div>
          {options.switch && (
            <S.AmountWrap>
              개수 선택 목록
              <S.PlusBtn onClick={increaseAmount}>+</S.PlusBtn>
              <Text>{options.amount}</Text>
              <S.MinusBtn onClick={decreaseAmount}>-</S.MinusBtn>
            </S.AmountWrap>
          )}
        </S.SelectWrap>
        {options.amount && options.switch && (
          <button type="button" onClick={onClickAddress}>
            누르면 주소
          </button>
        )}
        <S.UserInfo>
          사용자 정보
          <div>도로명 주소</div>
          <div>{address.address1}</div>
          <input
            placeholder="상세주소 입력해주세요"
            onChange={e => {
              setAddress({ ...address, address2: e.target.value });
            }}
          />
        </S.UserInfo>
        <S.PriceAndButton>
          <S.DiscountedPrice>구매가</S.DiscountedPrice>
          <S.PurchaseButton
            disabled={!isFormFilled}
            isFormFilled={isFormFilled}
          >
            <Text>구매</Text>
          </S.PurchaseButton>
        </S.PriceAndButton>
      </S.PurchaseWrap>
    </S.Dimmed>
  );
}
