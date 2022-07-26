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
  onClickCancle?: React.MouseEventHandler;
};

export function OrderHistoryCard({
  imageURL,
  productName,
  productPrice,
  options,
  onClickCancle,
}: OrderHistoryCardProps) {
  const optionList = options.map(option => <Text>{`* ${option}`}</Text>);

  return (
    <Box
      boxColor="white"
      styles={{ width: '30%' }}
      size="medium"
      justifyContent="space-between"
      position="relative"
    >
      <ImageContainer
        imageSrc={imageURL}
        size="medium"
        alt="주문기록 제품 이미지"
      />
      <Container flexDirection="column" gap={5}>
        <Text>제품명</Text>
        <Line />
        <Text>{productName}</Text>
        <Text>옵션</Text>
        <Line />
        {optionList}
      </Container>
      <StyledContainer flexDirection="column">
        <Text styles={{ margin: '0 auto' }}>배송 상태</Text>
        <ProgressBar progressRate={50} height={10} />
        <Text styles={{ margin: '0 auto' }} typography="Bold">
          가격
        </Text>
        <Text>{productPrice.toLocaleString()}</Text>
      </StyledContainer>
      <CancleButton iconSrc="CLOSE" onClick={onClickCancle} />
    </Box>
  );
}

const StyledContainer = styled(Container)`
  width: 100px;
`;

const CancleButton = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
  fill: ${({ theme }) => theme.pallete.grey3};
  cursor: pointer;
`;
