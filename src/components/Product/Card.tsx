import { useState } from 'react';
import styled from 'styled-components';

import { Text } from '@/components/common';
import { StyledTextProps } from '@/components/common/Text/types';

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

  // ERROR: as 키워드로 태그 변경시 프로퍼티로 스타일링 적용이 안됨
  // TODO: SOLVE https://github.com/styled-components/styled-components/issues/1981  forwardedAs를 사용해야함
  return (
    <Wrapper
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <StyledCard>
        <Content isDisplay={isHover} content={content} />

        <ThumbnailContainer>
          <Thumbnail alt="제품 썸네일" src={thumbnail} />
        </ThumbnailContainer>
        <Labels>라벨 넣을 예정</Labels>
        <Title typography="Regular">{title}</Title>
        <Brand forwardedAs="h4" color="grey3" typography="Light">
          {brand}
        </Brand>
        <PriceInfo>
          <DiscountInfo>
            <CurrentPrice color="secondary">{currentPrice}</CurrentPrice>
            <SaledPrice typography="Thin" color="grey3" forwardedAs="del">
              {salePrice}
            </SaledPrice>
          </DiscountInfo>
          <DiscountRate color="warning">{discountRate}%</DiscountRate>
        </PriceInfo>
        <PriceInfo>
          <SaledPrice typography="Thin" color="grey3" forwardedAs="del">
            세일가
          </SaledPrice>
          <DiscountRate color="warning">{discountRate}%</DiscountRate>
        </PriceInfo>
      </StyledCard>
    </Wrapper>
  );
}

const StyledCard = styled.div`
  width: 100%;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
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
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 70%;
  font-size: 18px;
  padding: 5px 0;
`;

const Brand = styled(Text)`
  font-size: 13px;
  padding: 5px 0;
`;

const Labels = styled.div`
  display: flex;
  padding: 10px 0;
  border-bottom: 0.5px solid ${({ theme }) => theme.pallete.grey5};
`;

const PriceInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
`;

const DiscountInfo = styled.div`
  display: flex;
  gap: 5px;
`;

const SaledPrice = styled(Text)<StyledTextProps>``;

const CurrentPrice = styled(Text)``;

const DiscountRate = styled(Text)``;
