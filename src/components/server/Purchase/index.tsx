import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { MouseEvent, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as API from '@/apis/mainProducts';
import { Text } from '@/components/common';
import * as S from '@/components/server/Purchase/style.index';
import { modalStore } from '@/recoils/modal/modal';
import { stopEventDelivery } from '@/utils/utils';

const getInfos = (path: string) => async () => {
  // id를 살려야 하나? 의논해보기
  const result = await axios.get<API.ProductDetail>(path);
  return result.data;
};

export function Purchase() {
  const [isDisplay, setIsDisplay] = useState(false);
  const [isClicked, setIsClicked] = useRecoilState(modalStore);
  const [amount, setAmount] = useState(1);
  const container = useRef();

  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const productID = param.get('id');

  const detailPath = `${process.env.MAIN_PRODUCTS}/${productID}`;
  const recommendPath = `${process.env.MAIN_PRODUCTS}/${productID}/recommendations`;

  const { data } = useQuery<API.ProductDetail, AxiosError>(
    ['getInfos'],
    getInfos(detailPath),
  );

  const test = data?.keyboardSwitches.map(SWITCH => (
    <S.Option key={SWITCH.id}>{SWITCH.name}</S.Option>
  ));

  const closeModal = (e: MouseEvent) => {
    e.stopPropagation();
    setIsClicked(!isClicked);
    setIsDisplay(false);
  };
  const increaseAmount = () => {
    setAmount(amount + 1);
  };
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
    }
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
            <S.ProductImage />
            <S.ProductInfo>
              <S.Title>제품명</S.Title>
              <S.Brand>제조사</S.Brand>
            </S.ProductInfo>
          </S.InfoLeft>
          <S.InfoRight>
            <S.OriginPrice>정가</S.OriginPrice>
            <S.DiscountedPrice>구매가</S.DiscountedPrice>
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
                if (container.current) {
                  container.current.focus();
                }
              }}
            >
              드롭 다운 버튼
            </S.DetailOptionBtn>
            <S.OptionList isDisplay={isDisplay}>{test}</S.OptionList>
          </div>
          <S.AmountWrap>
            개수 선택 목록
            <S.PlusBtn onClick={increaseAmount}>+</S.PlusBtn>
            <Text>{amount}</Text>
            <S.MinusBtn onClick={decreaseAmount}>-</S.MinusBtn>
          </S.AmountWrap>
        </S.SelectWrap>
        <S.UserInfo>사용자 정보</S.UserInfo>
        <S.PriceAndButton>
          <S.DiscountedPrice>구매가</S.DiscountedPrice>
          <S.Purchase>
            <Text>구매</Text>
          </S.Purchase>
        </S.PriceAndButton>
      </S.PurchaseWrap>
    </S.Dimmed>
  );
}
