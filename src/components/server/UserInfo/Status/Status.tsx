import styled from 'styled-components';

import { Text } from '@/components/common';
import { Container } from '@/components/common/Layout/Core';

import { StatusContent } from './StatusContent';

type StatusProps = {
  isPurchase: boolean;
};
export function Status({ isPurchase }: StatusProps) {
  const statusTitle = isPurchase ? (
    <Text color="primary" style={{ margin: '0 auto' }}>
      구매 현황
    </Text>
  ) : (
    <Text color="secondary" style={{ margin: '0 auto' }}>
      대여 현황
    </Text>
  );

  const extraRentalStatus = !isPurchase && (
    <>
      <StatusContent text="이용중" count={2} />
      <StatusContent text="배송중" count={2} />
      <StatusContent text="배송완료" count={2} />
    </>
  );
  return (
    <Container
      flexDirection="column"
      justifyContent="space-around"
      alignItems="center"
      gap="10px"
    >
      {statusTitle}
      <StatusContentContainer isPurchase={isPurchase}>
        <StatusContent text="입금전" count={1} />
        <StatusContent text="배송중" count={0} />
        <StatusContent text="배송완료" count={2} />
        {extraRentalStatus}
      </StatusContentContainer>
    </Container>
  );
}

const StatusContentContainer = styled.div<{ isPurchase: boolean }>`
  width: 100%;
  padding: 20px 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  border: 3px solid
    ${({ isPurchase, theme }) =>
      isPurchase ? theme.pallete.primary : theme.pallete.secondary};
  border-radius: 10px;
`;
