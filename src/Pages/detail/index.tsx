import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import { Icon } from '@/components/common';
import { Purchase } from '@/components/server/Purchase';
import * as S from '@/Pages/Detail/index.style';
import { modalStore } from '@/recoils/modal/modal';

import { image } from './index.type';

const getInfos = (path: string) => async () => {
  // id를 살려야 하나? 의논해보기
  const result = await axios.get(path);
  return result;
};
// const getRecommandItems = (id:String|n)
export function Detail() {
  const [isClicked, setIsClicked] = useRecoilState(modalStore);
  const [showDetail, setShowDetail] = useState(false);
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const productID = param.get('id');
  const detailPath = `${process.env.PRODUCT_DETAIL}/${productID}`;
  const recommendPath = `${process.env.PRODUCT_DETAIL}/${productID}/recommendations`;
  const { data } = useQuery<string, Error>(
    ['getInfos'],
    getInfos(detailPath),
  ).data;
  const recommend = useQuery<string, Error>(
    ['getInfos'],
    getInfos(recommendPath),
  ).data;
  console.log(recommendPath, recommend); // recommend api 주소 404 뜸
  const productInfo = data.product;
  const toggleModal = () => {
    setIsClicked(!isClicked);
  };
  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  return (
    <S.DetailWrap>
      <S.Title>{productInfo.title}</S.Title>
      <S.InfoWrap>
        <S.InfoLeft>
          <S.ImgSlide>
            <S.SlideImg src={productInfo.imageUrl} />
            <S.SlideBtnsWrap>
              <Icon iconSrc="PREV" width={30} height={30} />
              <Icon iconSrc="NEXT" width={30} height={30} />
            </S.SlideBtnsWrap>
          </S.ImgSlide>
          <S.SmallImgs>
            {data.keyboardImages.map((el: image) => {
              return <S.SmallImg key={el.id} src={el.imageUrl} />;
            })}
          </S.SmallImgs>
          <S.BtnsWrap>
            <S.InfoBtn
              onClick={() => {
                toggleDetail();
              }}
            >
              <S.BtnText>제품 정보</S.BtnText>
            </S.InfoBtn>
            <S.ReviewBtn>
              <S.BtnText>리뷰 보기</S.BtnText>
            </S.ReviewBtn>
          </S.BtnsWrap>
        </S.InfoLeft>
        <S.InfoRight>
          <S.DetailInfoWrap>
            <S.DetailTitle>{productInfo.title}</S.DetailTitle>
            <S.Price>가격 ${productInfo.price}</S.Price>
            <S.RentalPrice>하루 대여비${productInfo.rentalPrice}</S.RentalPrice>
            <S.Switches>스위치</S.Switches>
          </S.DetailInfoWrap>
          <S.RentalBtn>
            <S.BtnText>대여</S.BtnText>
          </S.RentalBtn>
          <S.BuyBtn
            onClick={() => {
              toggleModal();
            }}
          >
            <S.BtnText>구매</S.BtnText>
          </S.BuyBtn>
        </S.InfoRight>
        <Purchase />
      </S.InfoWrap>
      {data.keyboardInfoImages.map((info: image) => {
        return (
          <S.DetailInfoImg
            key={info.id}
            src={info.imageUrl}
            showDetail={showDetail}
          />
        );
      })}

      <S.MoreItemsTitle>more items</S.MoreItemsTitle>
      <S.MoreItems />
    </S.DetailWrap>
  );
}
