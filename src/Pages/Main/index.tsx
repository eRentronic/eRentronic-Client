import {
  useQuery,
  useInfiniteQuery,
  InfiniteData,
} from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

import * as API from '@/apis/mainProducts';
import { getMainProducts, getIds } from '@/apis/mainProducts';
import { Container } from '@/components/common/Layout/Core';
import { MainInput } from '@/components/server/Search';
import { filterModelType } from '@/service/filter';

import { Aside } from './Aside';
import { MainContents } from './Contents';
import * as S from './style';

// import { IconButton } from '@/components/common/Button/Icon';

const getProductsFilter = async () => {
  const { data } = await axios(`${process.env.PRODUCTS_FILTER}`);
  return data;
};

export function Main() {
  const { data: ID } = useQuery<API.MainProductsType, AxiosError, number[]>(
    ['productQueryKey'],
    getMainProducts,
    {
      select: data => {
        const pure = data.content;
        return getIds(pure);
      },
    },
  );

  const { data: filterData } = useQuery<
    filterModelType,
    AxiosError,
    filterModelType
  >(['productFilterQueryKey'], getProductsFilter);

  return (
    <S.Wrapper>
      <Container flexDirection="column" as="main">
        <MainInput />
        <MainContents idList={ID!} />
      </Container>
      <Aside {...filterData} />
    </S.Wrapper>
  );
}
