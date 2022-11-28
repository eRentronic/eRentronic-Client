import { Text } from '@/components/common';
import { Container } from '@/components/common/Layout/Core/Core';
import * as S from '@/components/server/Product/Card/Info.style';

type ProductInfoProps = {
  saleLabels: JSX.Element[];
  title: string;
  brandName: string;
  salePrice: number;
  originalPrice: false | JSX.Element;
  saleRate: false | JSX.Element;
};

export function ProductInfo({
  saleLabels,
  title,
  brandName,
  salePrice,
  originalPrice,
  saleRate,
}: ProductInfoProps) {
  return (
    <Container flexDirection="column" justifyContent="space-between">
      <S.Labels>{saleLabels}</S.Labels>
      <S.Title typography="Regular">{title}</S.Title>
      <S.Brand forwardedAs="h4" color="grey3" typography="Light">
        {brandName}
      </S.Brand>
      <Container justifyContent="space-between">
        <S.DiscountInfo>
          <Text color="secondary">{salePrice}</Text>
          {originalPrice}
        </S.DiscountInfo>
        {saleRate}
      </Container>
    </Container>
  );
}
