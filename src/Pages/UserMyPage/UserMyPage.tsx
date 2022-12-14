import styled from 'styled-components';

import { Line } from '@/components/common/Indicator/Line';
import { Container } from '@/components/common/Layout/Core';
import { PageList } from '@/components/common/PageList';
import { useOrderHistory } from '@/hooks/useOrderHistory';

import { OrderHistoryCard } from './OrderHistoryCard/OrderhistoryCard';
import { UserInfo } from './UserInfo/UserInfo';

export function UserMyPage() {
  const orderHistories = useOrderHistory();
  const orderList = orderHistories!.map(
    ({ title, price, state, orderSheetId, imageUrl }) => (
      <OrderHistoryCard
        productPrice={price}
        productName={title}
        imageURL={imageUrl}
        options={['1번 옵션', '2번 옵션']}
      />
    ),
  );
  return (
    <UserPageLayout>
      <Container>
        <UserInfo />
      </Container>
      <Line height={2} />
      <PageList />
      <Container gap={20}>{orderList}</Container>
    </UserPageLayout>
  );
}

const UserPageLayout = styled(Container)`
  width: 100vw;
  height: 90vh;
  flex-direction: column;
  justify-content: space-between;
  padding: 40px;
`;
