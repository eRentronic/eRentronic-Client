import styled from 'styled-components';

import { Discount } from '@/apis/mainProducts';
import { Text } from '@/components/common';
import { TextProps } from '@/components/common/Text/types';

export type InfoType = {
  imageUrl: string;
  title: string;
  brandName: string;
  salePriceWithComma: string;
  discounts: Discount;
  productTotalPrice: number;
};

type InfoProps = {
  info: InfoType;
};

export function Info({ info }: InfoProps) {
  const {
    imageUrl,
    title,
    brandName,
    salePriceWithComma: salePrice,
    discounts,
    productTotalPrice,
  } = info;

  const originPrice = !!discounts.length && (
    <OriginPrice styles={{ color: 'grey', fontSize: '10px' }} forwardedAs="del">
      {productTotalPrice.toLocaleString()}
    </OriginPrice>
  );
  const discountRate = !!discounts.length && (
    <DiscountRate color="warning">
      {discounts.length &&
        `${
          discounts.reduce((acc, curr) => {
            return {
              ...acc,
              saleRate: String(+acc.saleRate + +curr.saleRate),
            };
          }).saleRate
        }%`}
    </DiscountRate>
  );
  return (
    <InfoWrap>
      <ProductImage src={imageUrl} />
      <ProductDetail>
        <InfoLeft>
          <ProductInfo>
            <Title>{title}</Title>
            <Brand>{brandName}</Brand>
          </ProductInfo>
        </InfoLeft>
        <InfoRight>
          <PriceCompare>
            {originPrice}
            <DiscountedPrice>{`${salePrice} 원`}</DiscountedPrice>
          </PriceCompare>
          {discountRate}
        </InfoRight>
      </ProductDetail>
    </InfoWrap>
  );
}

const InfoWrap = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
const ProductDetail = styled.section`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const InfoLeft = styled.div`
  display: flex;
  padding: 10px 0px;
  gap: 10px;
  height: 100px; ;
`;

const ProductImage = styled.img`
  width: 150px;
  height: 100px;
`;

const ProductInfo = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 5px;
`;

const Title = styled(Text)`
  font-size: 10px;
  font-weight: 300;
  color: ${({ theme }) => theme.pallete.grey3};
`;

const Brand = styled(Text)`
  font-size: 10px;
  font-weight: 300;
  color: ${({ theme }) => theme.pallete.grey3};
`;

const InfoRight = styled.div`
  display: flex;
  padding: 10px 0px;
  flex-direction: column;
  align-items: flex-end;
  gap: 5px;
`;

const PriceCompare = styled.div`
  display: flex;
  gap: 5px;
`;

const OriginPrice = styled(Text)<TextProps<'del'>>`
  margin-bottom: 10px;
  font-weight: 500;
`;

const DiscountedPrice = styled(Text)<TextProps<'span'>>``;
const DiscountRate = styled(Text)<TextProps<'span'>>``;
