import styled from 'styled-components';

import { Text } from '@/components/common';
import { StyledTextProps } from '@/components/common/Text/types';

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
  // ERROR: as 키워드로 태그 변경시 프로퍼티로 스타일링 적용이 안됨
  // TODO: SOLVE https://github.com/styled-components/styled-components/issues/1981  forwardedAs를 사용해야함
  return (
    <Wrapper>
      <ThumbnailContainer>
        <Thumbnail alt="제품 썸네일" src={thumbnail} />
      </ThumbnailContainer>
      <Labels>라벨 넣을 예정</Labels>
      <Title typography="Black">{title}</Title>
      <Brand forwardedAs="h4" color="grey3">
        {brand}
      </Brand>
      <PriceInfo>
        <DiscountInfo>
          <SaledPrice color="grey3" forwardedAs="del">
            {salePrice}
          </SaledPrice>
          <CurrentPrice color="secondary">{currentPrice}</CurrentPrice>
        </DiscountInfo>

        <Text>{discountRate}</Text>
      </PriceInfo>
      <PriceInfo>
        <SaledPrice color="grey3" forwardedAs="del">
          세일가
        </SaledPrice>
        <Text>할인률</Text>
      </PriceInfo>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
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
  font-size: 18px;
  padding: 5px 0;
`;

const Brand = styled(Text)`
  font-size: 13px;
`;

const Labels = styled.div`
  display: flex;
  padding: 10px 0;
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DiscountInfo = styled.div`
  display: flex;
  gap: 5px;
`;

const SaledPrice = styled(Text)<StyledTextProps>``;

const CurrentPrice = styled(Text)``;
