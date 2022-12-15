import { useState } from 'react';

import { Line } from '@/components/common/Indicator/Line';
import { Container } from '@/components/common/Layout/Core';
import { PageList } from '@/components/common/PageList';
import { Status } from '@/components/server/UserInfo/Status';
import { useOrderHistory } from '@/hooks/useOrderHistory';

import { OrderHistoryCard } from './OrderHistoryCard/OrderhistoryCard';
import { RentHistoryCard } from './RentHistoryCard/RentHistoryCard';
import { UserInfo } from './UserInfo/UserInfo';

const RENT_DATA = {
  deposit: 1,
  delivering: 0,
  delComplete: 2,
  using: 2,
  usingDelivering: 1,
  usingDelComplete: 0,
};
const PURCHASE_DATA = {
  deposit: 1,
  delivering: 0,
  delComplete: 2,
};
const PURCHASE_PAGE_NUM = 3;
const RENT_PAGE_NUM = 2;

export function UserMyPage() {
  const [purchasePage, setPurchasePage] = useState(1);

  const [rentPage, setRentPage] = useState(1);
  const rentPageEnd = 2;

  const onClickCancel = () => {
    console.log('x버튼 클릭');
  };

  const purchaseHistories = useOrderHistory()!;
  const purchasePageEnd = Math.floor(
    purchaseHistories.length / PURCHASE_PAGE_NUM,
  );

  const purchasePageData = purchaseHistories.slice(
    (purchasePage - 1) * PURCHASE_PAGE_NUM,
    (purchasePage - 1) * PURCHASE_PAGE_NUM + PURCHASE_PAGE_NUM,
  );

  const orderList = purchasePageData.map(
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
    <Container
      flexDirection="column"
      alignItems="center"
      gap={15}
      styles={{
        width: '100vw',
        padding: '0 100px',
      }}
    >
      <Container justifyContent="center" gap={20} styles={{ width: '100%' }}>
        <UserInfo />
        <Container flexDirection="column" gap={10}>
          <Status isPurchase data={PURCHASE_DATA} />
          <Status isPurchase={false} data={RENT_DATA} />
        </Container>
      </Container>
      <Line height={2} color="grey2" width="100%" />
      <PageList
        end={purchasePageEnd}
        focus={purchasePage}
        setFocus={setPurchasePage}
      />
      <Container
        justifyContent="space-between"
        gap={20}
        styles={{ width: '100%' }}
      >
        {orderList}
      </Container>
      <PageList end={rentPageEnd} focus={rentPage} setFocus={setRentPage} />
      <Container
        justifyContent="space-between"
        gap={10}
        styles={{ width: '100%' }}
      >
        <RentHistoryCard
          rentRate={50}
          deliveryRate={50}
          imgSrc="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
          productName="제품 이름"
          productPrice={100000}
          options={['1번 옵션', '2번 옵션']}
          onClickCancel={onClickCancel}
        />
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
      <Line height={2} />
    </Container>
  );
}
