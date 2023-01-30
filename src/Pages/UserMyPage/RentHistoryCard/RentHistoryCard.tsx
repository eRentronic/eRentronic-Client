import styled from 'styled-components';

import { Icon, Text } from '@/components/common';
import { Line } from '@/components/common/Indicator/Line';
import { ProgressBar } from '@/components/common/Indicator/ProgressBar';
import { Box } from '@/components/common/Layout/Box';
import { Container } from '@/components/common/Layout/Core';
import { ImageContainer } from '@/components/common/Layout/ImageContainer';

type RentHistoryCardProps = {
  imgSrc: string;
  productName: string;
  options: string[];
  productPrice: number;
  deliveryRate: number;
  rentRate: number;
  onClickCancel: React.MouseEventHandler;
};

export function RentHistoryCard({
  imgSrc,
  onClickCancel,
  productName,
  options,
  productPrice,
  deliveryRate,
  rentRate,
}: RentHistoryCardProps) {
  const progressBarHeight = 5;
  const optionList = options.map(option => (
    <GreyList key={option}>
      <Text typography="Light" color="grey3" styles={{ marker: 'grey3' }}>
        {option}
      </Text>
    </GreyList>
  ));
  return (
    <Box
      boxColor="white"
      borderColor="secondary"
      borderWeight={3}
      size="large"
      styles={{ position: 'relative', padding: '10px' }}
      alignItems="center"
      justifyContent="space-around"
      gap={20}
    >
      <ImageContainer
        size="medium"
        imageSrc={imgSrc}
        alt="대여 주문 기록 이미지"
      />
      <Container
        flexDirection="column"
        justifyContent="flex-start"
        styles={{ width: '30%' }}
        gap={5}
      >
        <Text typography="Light" color="grey3">
          제품명
        </Text>
        <Line />
        <Text typography="Light" color="grey3">
          {productName}
        </Text>
        <Text typography="Light" color="grey3">
          옵션
        </Text>
        <Line />
        {optionList}
      </Container>
      <Container
        flexDirection="column"
        gap={10}
        styles={{ width: '200px' }}
        justifyContent="space-between"
      >
        <Container flexDirection="column" alignItems="center" gap={10}>
          <Text>배송 현황</Text>
          <ProgressBar progressRate={deliveryRate} height={progressBarHeight} />
        </Container>
        <Container
          flexDirection="column"
          alignItems="center"
          gap={10}
          styles={{ marginBottom: '20px' }}
        >
          <Text>대여 현황</Text>
          <ProgressBar progressRate={rentRate} height={progressBarHeight} />
        </Container>
        <Container justifyContent="flex-end" alignItems="center">
          <Text typography="Bold">{productPrice.toLocaleString()}원</Text>
        </Container>
      </Container>
      <CancelBtn iconSrc="CLOSE" onClick={onClickCancel} />
    </Box>
  );
}

const GreyList = styled.li`
  &::marker {
    color: ${({ theme }) => theme.pallete.grey3};
  }
`;
export const CancelBtn = styled(Icon)`
  position: absolute;
  fill: ${({ theme }) => theme.pallete.grey3};
  cursor: pointer;
  top: 10px;
  right: 10px;
`;
