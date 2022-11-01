import { useState } from 'react';

import * as API from '@/apis/mainProducts';
import { Text } from '@/components/common';
import * as S from '@/components/server/Product/Card/Card.style';
import { Content } from '@/components/server/Product/Card/Content';
import { ProductInfo } from '@/components/server/Product/Card/Info';
import { Thumbnail } from '@/components/server/Product/Card/Thumbnail';
import { SaleLabel } from '@/components/server/Product/Label';

type CardProps = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  price: number;
  rentalPrice: number;
  rentable: boolean;
  like: boolean;
  inBucket: boolean;
  vendor: { id: number; name: string };
  discountInfo: {
    discounts: API.Discount;
    salePrice: number;
    saleRentalPrice: number;
  };
  onClickCard: () => void;
};

export function Card({
  title,
  content,
  imageUrl,
  price,
  rentable,
  rentalPrice,
  like,
  inBucket,
  vendor,
  discountInfo,
  onClickCard,
}: CardProps) {
  const [isHover, setIsHover] = useState(false);
  const { name: brandName } = vendor;
  const { discounts, salePrice } = discountInfo;

  const totalSaleRate = discounts.reduce(
    (acc, { saleRate }): number => acc + +saleRate,
    0,
  );

  const saleLabels = discounts.map(({ title: saleTitle, id }) => {
    return <SaleLabel key={id} title={saleTitle} />;
  });

  const originalPrice = !!discounts.length && (
    <S.SaledPrice typography="Thin" color="grey3" forwardedAs="del">
      {price}
    </S.SaledPrice>
  );

  const saleRate = !!discounts.length && (
    <Text color="warning">{totalSaleRate}%</Text>
  );

  const onMouseEnterCard = () => {
    setIsHover(true);
  };

  const onMouseLeaveCard = () => {
    setIsHover(false);
  };

  const ProductInfoProps = {
    saleLabels,
    title,
    brandName,
    salePrice,
    originalPrice,
    saleRate,
  };

  return (
    <S.Wrapper onMouseEnter={onMouseEnterCard} onMouseLeave={onMouseLeaveCard}>
      <S.StyledCard onClick={onClickCard}>
        <Content isDisplay={isHover} content={content} />
        <Thumbnail imageUrl={imageUrl} />
        <ProductInfo {...ProductInfoProps} />
      </S.StyledCard>
    </S.Wrapper>
  );
}
