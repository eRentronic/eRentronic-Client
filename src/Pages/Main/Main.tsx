import { Container } from '@/components/common/Layout/Core/Core';
import { MainInput } from '@/components/server/Search';
import { useMainProducts } from '@/hooks/useMainProducts';
import { useProductsFilter } from '@/hooks/useProductsFilter';
import { getIds } from '@/service/product';

import { Aside } from './Aside';
import { MainContents } from './Contents';
import * as S from './style';

export default function Main() {
  const ID = useMainProducts<number[]>({
    select: data => {
      const pure = data.content;
      const ids = getIds(pure);
      return ids;
    },
  })!;

  const filterData = useProductsFilter()!;
  console.log(filterData);
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
