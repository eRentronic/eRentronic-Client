import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useResetRecoilState, useRecoilState } from 'recoil';
import styled from 'styled-components';

import { SideTab } from '@/components/Filter/SideTab/SideTab';
import { Header } from '@/components/Header';
import { Card } from '@/components/Product/Card/Card';
import { MainInput } from '@/components/Search/MainInput';
import { map } from '@/libs/fx';
import { popUpOpenState } from '@/recoils/popUp/popUp';
import { productsStore } from '@/recoils/products/products';

type ProductsType = {
  content: contentType[];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: true;
    };
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  numberOfElements: number;
  number: number;
  first: boolean;
  last: boolean;
  size: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  empty: boolean;
};

type contentType = {
  product: {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
    price: number;
    rentable: boolean;
    like: boolean;
    inBucket: boolean;
    rentalPrice: number;
  };
  discountInfo: {
    discounts: { id: number; title: string; saleRate: string }[];
  };
  vendors: { id: number; name: string };
};

const getMainProducts = async () => {
  const result = await fetch(`${process.env.MAIN_PRODUCTS}`).then(data =>
    data.json(),
  );
  return result;
};

const normalize = (data: ProductsType | undefined) => {
  if (!data) {
    return;
  }

  const { content } = data;
  const normalizedData = content.reduce(
    (
      acc,
      {
        product: {
          id,
          title,
          content: productContent,
          imageUrl,
          price,
          rentable,
          rentalPrice,
          like,
          inBucket,
        },
      },
    ) => {
      return {
        titles: { ...acc.titles, [id]: title },
        contents: { ...acc.contents, [id]: productContent },
        images: { ...acc.images, [id]: imageUrl },
        prices: { ...acc.prices, [id]: price },
        rentables: { ...acc.rentables, [id]: rentable },
        rentalPrices: { ...acc.rentalPrices, [id]: rentalPrice },
        likes: { ...acc.likes, [id]: like },
        inBuckets: { ...acc.inBuckets, [id]: inBucket },
      };
    },
    {
      titles: {},
      contents: {},
      images: {},
      prices: {},
      rentables: {},
      rentalPrices: {},
      likes: {},
      inBuckets: {},
    },
  );

  return normalizedData;
};

const getIds = (data: ProductsType | undefined) => {
  if (!data) {
    return;
  }
  const { content } = data;
  const ids = map(({ product: { id } }: contentType) => id, content);
  return ids;
};

export function Main() {
  const closeWholePopUp = useResetRecoilState(popUpOpenState);
  const { data } = useQuery<ProductsType, Error>(
    ['productQueryKey'],
    getMainProducts,
  );
  const [productsList, setProductsList] = useRecoilState(productsStore);

  const newProductList = normalize(data);
  const ids = getIds(data);
  console.log(ids);
  useEffect(() => {
    if (!newProductList) {
      return;
    }

    setProductsList({
      ...productsList,
      titles: { ...productsList.titles, ...newProductList.titles },
      contents: { ...productsList.contents, ...newProductList.contents },
      images: { ...productsList.images, ...newProductList.images },
      prices: { ...productsList.prices, ...newProductList.prices },
      rentables: { ...productsList.rentables, ...newProductList.rentables },
      rentalPrices: {
        ...productsList.rentalPrices,
        ...newProductList.rentalPrices,
      },
      likes: { ...productsList.likes, ...newProductList.likes },
      inBuckets: { ...productsList.inBuckets, ...newProductList.inBuckets },
    });
  }, []);
  console.log(productsList);

  return (
    <Wrapper onClick={closeWholePopUp}>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <StyledMain>
        <SearchSection>여기는</SearchSection>
        <MainInput />
        <MainContents>
          <Card
            title="키보드"
            thumbnail="https://cdn.inflearn.com/public/courses/328753/cover/0c368e07-0353-4167-a4cb-56726d49218e/%E1%84%8F%E1%85%A5%E1%84%87%E1%85%A5.png"
            brand="레오폴드"
            currentPrice={3000}
            salePrice={2000}
            discountRate={10}
            isLike={false}
            content="제품 설명 테스트 중~"
          />
        </MainContents>
      </StyledMain>
      <StyledAside>
        <SideTab />
      </StyledAside>
      <footer>푸터</footer>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const StyledHeader = styled.header`
  display: flex;
  padding: 20px 0px;
  box-shadow: 0px 11px 22px 5px rgba(0, 0, 0, 0.2);
`;

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
`;

const StyledAside = styled.aside`
  position: fixed;
  width: 15%;
  left: 5%;
  top: 30%;
`;

const SearchSection = styled.section`
  height: 150px;
  background-color: aliceblue;
`;

const MainContents = styled.section`
  display: flex;
  width: 60%;
  margin: 0 auto;
  flex-wrap: wrap;
`;
