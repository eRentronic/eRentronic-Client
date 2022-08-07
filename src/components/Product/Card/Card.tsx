import { useState } from 'react';

import * as S from './card.style';
import { Content } from './Content';

type CardProps = {
  thumbnail: string;
  title: string;
  brand: string;
  currentPrice: number;
  salePrice: number;
  discountRate?: number;
  content: string;
  isLike: boolean;
};

export function Card(props: CardProps) {
  const {
    thumbnail,
    title,
    brand,
    currentPrice,
    salePrice,
    discountRate,
    content,
    isLike,
  } = props;

  const [isHover, setIsHover] = useState(false);

  return (
    <S.Wrapper
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <S.StyledCard>
        <Content isDisplay={isHover} content={content} />

        <S.ThumbnailContainer>
          <S.Thumbnail alt="제품 썸네일" src={thumbnail} />
        </S.ThumbnailContainer>
        <S.Labels>라벨 넣을 예정</S.Labels>
        <S.Title typography="Regular">{title}</S.Title>
        <S.Brand forwardedAs="h4" color="grey3" typography="Light">
          {brand}
        </S.Brand>
        <S.PriceInfo>
          <S.DiscountInfo>
            <S.CurrentPrice color="secondary">{currentPrice}</S.CurrentPrice>
            <S.SaledPrice typography="Thin" color="grey3" forwardedAs="del">
              {salePrice}
            </S.SaledPrice>
          </S.DiscountInfo>
          <S.DiscountRate color="warning">{discountRate}%</S.DiscountRate>
        </S.PriceInfo>
        <S.PriceInfo>
          <S.SaledPrice typography="Thin" color="grey3" forwardedAs="del">
            세일가
          </S.SaledPrice>
          <S.DiscountRate color="warning">{discountRate}%</S.DiscountRate>
        </S.PriceInfo>
      </S.StyledCard>
    </S.Wrapper>
  );
}
