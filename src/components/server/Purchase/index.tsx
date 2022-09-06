import { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';

import { Text } from '@/components/common';
import * as S from '@/components/server/Purchase/style.index';
import { modalStore } from '@/recoils/modal/modal';

export function Purchase() {
  function closeModal(e: MouseEvent) {
    e.stopPropagation();
    setIsClicked(!isClicked);
  }
  const [isClicked, setIsClicked] = useRecoilState(modalStore);
  return (
    <>
      <S.Dimmed
        isClicked={isClicked}
        onClick={e => {
          closeModal(e);
        }}
      />
      <S.PurchaseWrap isClicked={isClicked}>
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
        <S.UserInfo>사용자 정보</S.UserInfo>
        <S.PriceAndButton>
          <S.DiscountedPrice>구매가</S.DiscountedPrice>
          <S.Purchase>
            <Text> 구매</Text>
          </S.Purchase>
        </S.PriceAndButton>
      </S.PurchaseWrap>
    </>
  );
}
