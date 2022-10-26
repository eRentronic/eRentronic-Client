import {
  useQuery,
  useInfiniteQuery,
  InfiniteData,
} from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import * as API from '@/apis/mainProducts';
import { Container } from '@/components/common/Layout/Core';
import { SideTab } from '@/components/server/Filter/SideTab';
import { Card } from '@/components/server/Product/Card/';
import { MainInput } from '@/components/server/Search';
import { normalizeProduct } from '@/service/product';

import * as S from './style';

type normalizedProductType = {
  title: { [key: number]: string };
  content: { [key: number]: string };
  imageUrl: { [key: number]: string };
  price: { [key: number]: number };
  rentalPrice: { [key: number]: number };
  rentable: { [key: number]: boolean };
  like: { [key: number]: boolean };
  inBucket: { [key: number]: boolean };
  vendor: { [key: number]: { id: number; name: string } };
  salePrice: { [key: number]: number };
  saleRentalPrice: { [key: number]: number };
  discountInfo: {
    [key: number]: {
      discounts: API.Discount;
      salePrice: number;
      saleRentalPrice: number;
    };
  };
};

const getMainProducts = async () => {
  const result = await fetch(`${process.env.MAIN_PRODUCTS}`).then(data =>
    data.json(),
  );

  return result;
};

const getIds = (productData: API.ContentType[]) => {
  const productIdList = productData.map(({ product: { id } }) => id);
  return productIdList;
};

export function Main() {
  const { data: ID } = useQuery<API.MainProductsType, Error, number[]>(
    ['productQueryKey'],
    getMainProducts,
    {
      select: data => {
        const pure = data.content;
        return getIds(pure);
      },
    },
  );

  return (
    <S.Wrapper>
      <Container flexDirection="column" as="main">
        <MainInput />
        <MainContents idList={ID!} />
      </Container>
      <Aside />
    </S.Wrapper>
  );
}

type MainContentsProps = { idList: number[] };

function MainContents({ idList }: MainContentsProps) {
  const navigate = useNavigate();
  const { data } = useQuery<API.MainProductsType, Error, normalizedProductType>(
    ['normalizedProducts'],
    getMainProducts,
    {
      select: normalizeProduct,
    },
  );

  const {
    title,
    content,
    imageUrl,
    price,
    rentable,
    rentalPrice,
    like,
    inBucket,
    vendor,
    discountInfo,
  } = data as normalizedProductType;

  const onClickCard = (productId: number) => () => {
    navigate(`/detail?id=${productId}`);
  };

  const cardPropsList = idList.map(id => ({
    id,
    title: title[id],
    content: content[id],
    imageUrl: imageUrl[id],
    price: price[id],
    rentable: rentable[id],
    rentalPrice: rentalPrice[id],
    like: like[id],
    inBucket: inBucket[id],
    vendor: vendor[id],
    discountInfo: discountInfo[id],
    onClickCard: onClickCard(id),
  }));

  const cardList = cardPropsList.map(props => <Card {...props} />);
  return <S.MainContents>{cardList}</S.MainContents>;
}

function Aside() {
  return (
    <S.StyledAside>
      <SideTab />
    </S.StyledAside>
  );
}
