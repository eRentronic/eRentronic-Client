import { useState } from 'react';
import { useRecoilValue } from 'recoil';

import { SaleLabel } from '@/components/Product/Label/SaleLabel';
import { normalizedProducts } from '@/recoils/products/selectors/normalized';

import * as S from './card.style';
import { Content } from './Content';

type CardProps = {
  productId: number;
};

export function Card({ productId }: CardProps) {
  const {
    titles,
    contents,
    images,
    prices,
    rentables,
    rentalPrices,
    likes,
    inBuckets,
    vendors,
    salePrice,
    saleRentalPrice,
    discountInfos,
  } = useRecoilValue(normalizedProducts);

  const [isHover, setIsHover] = useState(false);

  const brandName = vendors[productId].name;
  const totalSaleRate = discountInfos[productId].reduce(
    (acc, { saleRate }): number => acc + +saleRate,

    0,
  );
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
        <Content isDisplay={isHover} content={contents[productId]} />
        <S.ThumbnailContainer>
          <S.Thumbnail alt="제품 썸네일" src={images[productId]} />
        </S.ThumbnailContainer>
        <S.Labels>
          <SaleLabel isEventSale={false} isBrandNewSale />
        </S.Labels>
        <S.Title typography="Regular">{titles[productId]}</S.Title>
        <S.Brand forwardedAs="h4" color="grey3" typography="Light">
          {brandName}
        </S.Brand>
        <S.PriceInfo>
          <S.DiscountInfo>
            <S.CurrentPrice color="secondary">
              {prices[productId]}
            </S.CurrentPrice>
            <S.SaledPrice typography="Thin" color="grey3" forwardedAs="del">
              {salePrice[productId]}
            </S.SaledPrice>
          </S.DiscountInfo>
          <S.DiscountRate color="warning">{totalSaleRate}%</S.DiscountRate>
        </S.PriceInfo>
        <S.PriceInfo>
          <S.SaledPrice typography="Thin" color="grey3" forwardedAs="del">
            세일가
          </S.SaledPrice>
          <S.DiscountRate color="warning">{totalSaleRate}%</S.DiscountRate>
        </S.PriceInfo>
      </S.StyledCard>
    </S.Wrapper>
  );
}
