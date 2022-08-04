import styled from 'styled-components';

import { Text } from '@/components/common/Text';

type CardProps = {
  thumbnail: string;
  title: string;
  brand: string;
  currentPrice: number;
  salePrice: number;
  discountRate?: number;
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
    isLike,
  } = props;

  return (
    <Wrapper>
      <ThumbnailContainer>
        <Thumbnail alt="제품 썸네일" src={thumbnail} />
      </ThumbnailContainer>
      <Labels>라벨 넣을 예정</Labels>
      <Title>{title}</Title>
      <Brand>{brand}</Brand>
      <PriceInfo>
        <DiscountInfo>
          <SaledPrice as="del">{salePrice}</SaledPrice>
          <CurrentPrice>{currentPrice}</CurrentPrice>
        </DiscountInfo>

        <Text>{discountRate}</Text>
      </PriceInfo>
      <PriceInfo>
        <SaledPrice as="del">세일가</SaledPrice>
        <Text>할인률</Text>
      </PriceInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const ThumbnailContainer = styled.figure`
  width: 100%;
  max-height: 200px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Title = styled(Text)`
  font-weight: 700;
  font-size: 16px;
`;

const Brand = styled(Text)`
  font-size: 10px;
`;

const Labels = styled.div`
  display: flex;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DiscountInfo = styled.div`
  display: flex;
  gap: 5px;
`;

const SaledPrice = styled(Text)`
  color: grey;
`;

const CurrentPrice = styled(Text)`
  color: blue;
`;
