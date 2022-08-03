import styled from 'styled-components';

import { Text } from '@/components/common/Text';

export function Card() {
  return (
    <Wrapper>
      <ThumbnailContainer>
        <Thumbnail
          alt="제품 썸네일"
          src="https://cdn.inflearn.com/public/courses/328753/cover/0c368e07-0353-4167-a4cb-56726d49218e/%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5.png"
        />
      </ThumbnailContainer>
      <Labels>라벨존</Labels>
      <Title>상품명</Title>
      <Brand>브랜드</Brand>
      <PriceInfo>
        <DiscountInfo>
          <SaledPrice as="del">세일가</SaledPrice>
          <CurrentPrice>현재가</CurrentPrice>
        </DiscountInfo>

        <Text>할인률</Text>
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
