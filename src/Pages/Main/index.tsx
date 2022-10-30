import {
  useQuery,
  useInfiniteQuery,
  InfiniteData,
} from '@tanstack/react-query';

import * as API from '@/apis/mainProducts';
import { getMainProducts, getIds } from '@/apis/mainProducts';
import { Container } from '@/components/common/Layout/Core';
import { MainInput } from '@/components/server/Search';

import { Aside } from './Aside';
import { MainContents } from './Contents';
import * as S from './style';

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
