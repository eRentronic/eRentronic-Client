import {
  useQuery,
  useInfiniteQuery,
  InfiniteData,
} from '@tanstack/react-query';

import * as API from '@/apis/mainProducts';
import { SideTab } from '@/components/server/Filter/SideTab';
import { Card } from '@/components/server/Product/Card/';
import { MainInput } from '@/components/server/Search';

import * as S from './style';

const getMainProducts = async () => {
  const result = await fetch(
    `${process.env.MAIN_PRODUCTS}?page=2&size=12`,
  ).then(data => data.json());
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
  const mainContents = ID?.map(id => <Card productId={id} />);

  return (
    <S.Wrapper>
      <S.StyledMain>
        <S.SearchSection>여기는</S.SearchSection>
        <MainInput />
        <S.MainContents>{mainContents}</S.MainContents>
      </S.StyledMain>
      <S.StyledAside>
        <SideTab />
      </S.StyledAside>
    </S.Wrapper>
  );
}
