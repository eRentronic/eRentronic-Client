import styled from 'styled-components';

import { Text } from '@/components/common';
import { Icon } from '@/components/common/Icon';
import { Line } from '@/components/common/Indicator/Line';
import { ProgressBar } from '@/components/common/Indicator/ProgressBar';
import { Box } from '@/components/common/Layout/Box';
import { Container } from '@/components/common/Layout/Core';
import { ImageContainer } from '@/components/common/Layout/ImageContainer';

type OrderHistoryCardProps = {
  imageURL?: string;
  productName: string;
  productPrice: number;
  options: string[];
  onClickCancel?: React.MouseEventHandler;
};

export function OrderHistoryCard({
  imageURL,
  productName,
  productPrice,
  options,
  onClickCancel,
}: OrderHistoryCardProps) {
  const optionList = options.map(option => (
    <Text typography="Light" color="grey3">{`* ${option}`}</Text>
  ));

  return (
    <Box
      boxColor="white"
      borderWeight={3}
      boxStyles={{ width: '30%' }}
      size="medium"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      gap={20}
    >
      <ImageContainer
        imageSrc={imageURL}
        size="medium"
        alt="주문기록 제품 이미지"
      />
      <Container
        flexDirection="column"
        justifyContent="flex-start"
        gap={5}
        styles={{ width: '30%' }}
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
      <Container flexDirection="column" gap={10} styles={{ width: '100px' }}>
        <Text styles={{ margin: '0 auto' }}>배송 상태</Text>
        <ProgressBar progressRate={50} height={10} />
        <Text styles={{ margin: '0 auto' }} typography="Bold">
          가격
        </Text>
        <Text>{productPrice.toLocaleString()}</Text>
      </Container>
      <CancleButton iconSrc="CLOSE" onClick={onClickCancel} />
    </Box>
  );
}

const CancleButton = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
  fill: ${({ theme }) => theme.pallete.grey3};
  cursor: pointer;
`;
