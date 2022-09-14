import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';

import * as API from '@/apis/mainProducts';
import { Icon } from '@/components/common';
import { Purchase } from '@/components/server/ProductDetail';
import * as S from '@/Pages/Detail/index.style';
import { image } from '@/Pages/Detail/index.type';
import { modalStore } from '@/recoils/modal/modal';

const getInfos = (path: string) => async () => {
  // id를 살려야 하나? 의논해보기
  const result = await axios.get<API.ProductDetail>(path);
  return result.data;
};
export function Detail() {
  const [isClicked, setIsClicked] = useRecoilState(modalStore);
  const [showDetail, setShowDetail] = useState(false);
  const location = useLocation();
  const param = new URLSearchParams(location.search);
  const productID = param.get('id');

  const detailPath = `${process.env.MAIN_PRODUCTS}/${productID}`;
  // const recommendPath = `${process.env.MAIN_PRODUCTS}/${productID}/recommendations`;

  const { data } = useQuery<API.ProductDetail, AxiosError>(
    ['getInfos'],
    getInfos(detailPath),
  );
  // const recommend = useQuery<API.ProductDetail, AxiosError>(
  //   ['getRecommend'],
  //   getInfos(recommendPath),
  // );
  if (!data) return <>에러</>;
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
            {data!.keyboardImages.map((el: image) => {
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
            <S.Info>
              <S.Price>가격</S.Price>
              <S.DetailStatus>
                {productInfo.price.toLocaleString()}
              </S.DetailStatus>
            </S.Info>
            <S.Info>
              <S.RentalPrice>하루 대여비</S.RentalPrice>
              <S.DetailStatus>
                {productInfo.rentalPrice.toLocaleString()}
              </S.DetailStatus>
            </S.Info>
            <S.Switches>스위치</S.Switches>
          </S.DetailInfoWrap>
          <S.DecisionBtns>
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
          </S.DecisionBtns>
        </S.InfoRight>
        <Purchase />
      </S.InfoWrap>
      {data!.keyboardInfoImages.map((info: image) => {
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
