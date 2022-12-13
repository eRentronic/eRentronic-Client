import { useQuery } from '@tanstack/react-query';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Line } from '@/components/common/Indicator/Line';
import { Container } from '@/components/common/Layout/Core';
import { PageList } from '@/components/common/PageList';
import { Status } from '@/components/server/UserInfo/Status';

import { OrderHistoryCard } from './OrderHistoryCard/OrderhistoryCard';
import { RentHistoryCard } from './RentHistoryCard/RentHistoryCard';
import { UserInfo } from './UserInfo/UserInfo';

export function UserMyPage() {
  const rentData = {
    deposit: 1,
    delivering: 0,
    delComplete: 2,
    using: 2,
    usingDelivering: 1,
    usingDelComplete: 0,
  };
  const purchaseData = {
    deposit: 1,
    delivering: 0,
    delComplete: 2,
  };

  const [purchasePage, setPurchasePage] = useState(1);
  const purchasePageEnd = 10;
  const [rentPage, setRentPage] = useState(1);
  const rentPageEnd = 9;

  const onClickCancel = () => {};

  return (
    <Container
      flexDirection="column"
      justifyContent="space-between"
      gap="15px"
      styles={{
        width: '100vw',
        padding: '40px',
      }}
    >
      <Container justifyContent="space-between">
        <UserInfo />
        <Container flexDirection="column" gap={10}>
          <Status isPurchase data={purchaseData} />
          <Status isPurchase={false} data={rentData} />
        </Container>
      </Container>
      <Line height={2} color="grey2" width="100%" />
      <PageList
        end={purchasePageEnd}
        skipNumber={5}
        focus={purchasePage}
        setFocus={setPurchasePage}
      />
      <Container>
        <OrderHistoryCard
          productName="테스트"
          productPrice={10000000}
          options={['1번 옵션', '2번 옵션']}
        />
      </Container>
      <PageList
        end={rentPageEnd}
        skipNumber={5}
        focus={rentPage}
        setFocus={setRentPage}
      />
      <Container>
        <RentHistoryCard
          rentRate={50}
          deliveryRate={50}
          imgSrc="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
          productName="제품 이름"
          productPrice={100000}
          options={['1번 옵션', '2번 옵션']}
          onClickCancel={onClickCancel}
        />
      </Container>
    </Container>
  );
}
