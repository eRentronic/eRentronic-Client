import styled from 'styled-components';

import { Text } from '@/components/common';
import { Container } from '@/components/common/Layout/Core';

import { StatusContent } from './StatusContent';

type StatusProps = {
  isPurchase: boolean;
  data: {
    deposit: number;
    delivering: number;
    delComplete: number;
    using?: number;
    usingDelivering?: number;
    usingDelComplete?: number;
  };
};
export function Status({ isPurchase, data }: StatusProps) {
  const {
    deposit,
    delivering,
    delComplete,
    using,
    usingDelivering,
    usingDelComplete,
  } = data;
  if (!isPurchase) {
  }
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
      <StatusContent text="이용중" count={using} />
      <StatusContent text="배송중" count={usingDelivering} />
      <StatusContent text="배송완료" count={usingDelComplete} />
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
        <StatusContent text="입금전" count={deposit} />
        <StatusContent text="배송중" count={delivering} />
        <StatusContent text="배송완료" count={delComplete} />
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
