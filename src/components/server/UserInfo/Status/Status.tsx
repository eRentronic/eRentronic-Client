import { Text } from '@/components/common';
import { Line } from '@/components/common/Indicator/Line';
import { Box } from '@/components/common/Layout/Box';
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
  const borderColor = isPurchase ? 'primary' : 'secondary';
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
      <Line
        margin="10px 0"
        height={2}
        styles={{
          gridColumn: '1/ -1',
        }}
      />
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
      <Box
        borderColor={borderColor}
        borderWeight={3}
        boxColor="white"
        boxStyles={{ width: '100%' }}
      >
        <Container
          styles={{
            display: 'grid',
            placeContent: 'space-between center',
            gridTemplateColumns: '1fr 1fr 1fr',
            width: '100%',
          }}
        >
          <StatusContent text="입금전" count={deposit} />
          <StatusContent text="배송중" count={delivering} />
          <StatusContent text="배송완료" count={delComplete} />

          {extraRentalStatus}
        </Container>
      </Box>
    </Container>
  );
}
