import { useRecoilState } from 'recoil';

import { Icon } from '@/components/common';
import { Purchase } from '@/components/server/Purchase';
import * as S from '@/Pages/detail/index.style';
import { modalStore } from '@/recoils/modal/modal';

import { image } from './index.type';

const productImages: Array<image> = [
  {
    id: 1,
    imageUrl:
      'https://cdn.pixabay.com/photo/2017/03/24/03/20/keyboard-2170063_1280.png',
  },
  {
    id: 2,
    imageUrl:
      'https://cdn.pixabay.com/photo/2020/04/08/16/32/keyboard-5017973_960_720.jpg',
  },
  {
    id: 3,
    imageUrl:
      'https://cdn.pixabay.com/photo/2016/11/28/01/34/laptop-1864126_960_720.jpg',
  },
];

export function Detail() {
  const [isClicked, setIsClicked] = useRecoilState(modalStore);
  function toggleModal() {
    setIsClicked(!isClicked);
  }
  return (
    <S.DetailWrap>
      <S.Title>제품 명</S.Title>
      <S.InfoWrap>
        <S.InfoLeft>
          <S.ImgSlide>
            <S.SlideBtnsWrap>
              <Icon iconSrc="PREV" width={30} height={30} />
              <Icon iconSrc="NEXT" width={30} height={30} />
            </S.SlideBtnsWrap>
          </S.ImgSlide>
          <S.SmallImgs>
            {productImages.map(el => {
              return <S.SmallImg key={el.id} src={el.imageUrl} />;
            })}
          </S.SmallImgs>
          <S.BtnsWrap>
            <S.InfoBtn>
              <S.BtnText>제품 정보</S.BtnText>
            </S.InfoBtn>
            <S.ReviewBtn>
              <S.BtnText>리뷰 보기</S.BtnText>
            </S.ReviewBtn>
          </S.BtnsWrap>
        </S.InfoLeft>
        <S.InfoRight>
          <S.DetailInfoWrap>
            <S.DetailTitle>제품 명</S.DetailTitle>
            <S.Price>가격:</S.Price>
            <S.RentalPrice>하루 대여비:</S.RentalPrice>
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
      <S.MoreItemsTitle>more items</S.MoreItemsTitle>
      <S.MoreItems />
    </S.DetailWrap>
  );
}
