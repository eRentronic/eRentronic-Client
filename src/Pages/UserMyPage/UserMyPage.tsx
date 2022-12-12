import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Line } from '@/components/common/Indicator/Line';
import { Container } from '@/components/common/Layout/Core';
import { PageList } from '@/components/common/PageList';

import { OrderHistoryCard } from './OrderHistoryCard/OrderhistoryCard';
import { UserInfo } from './UserInfo/UserInfo';

export function UserMyPage() {
  return (
    <UserPageLayout>
      <Container>
        <UserInfo />
      </Container>
      <Line height={2} />
      <PageList />
      <Container>
        <OrderHistoryCard
          productName="테스트"
          productPrice={10000000}
          options={['1번 옵션', '2번 옵션']}
        />
      </Container>
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
