import { useCallback } from 'react';

import { Container } from '@/components/common/Layout/Core/Core';
import { MainInput } from '@/components/server/Search';
import { useInterSectionObserver } from '@/hooks/useIntersection';
import { useMainProducts } from '@/hooks/useMainProducts';
import { useProductsFilter } from '@/hooks/useProductsFilter';
import { getIds } from '@/service/product';

import { Aside } from './Aside';
import { MainContents } from './Contents';
import * as S from './style';

export default function Main() {
  const {
    infiniteData: ids,
    fetchNextPage,
    isFetchingNextPage,
  } = useMainProducts<number[]>({
    select: data => {
      const { pages, pageParams } = data;

      const productsDataLists = pages.map(productData =>
        getIds(productData.content),
      );
      return { pages: productsDataLists, pageParams };
    },
    mergePages: data => data!.pages.reduce((a, b) => [...a, ...b]),
  })!;

  const onIntersectLastCard: IntersectionObserverCallback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [target] = entries;
      if (target.isIntersecting) {
        fetchNextPage();
      }
    },
    [fetchNextPage],
  );

  const setTarget = useInterSectionObserver({
    onInterSect: onIntersectLastCard,
  });

  const filterData = useProductsFilter()!;

  return (
    <S.Wrapper>
      <Container flexDirection="column" as="main">
        <MainInput />
        <MainContents idList={ids!} setIntersectTarget={setTarget} />
        {isFetchingNextPage && <div>데이터 패칭중</div>}
      </Container>
      <Aside {...filterData} />
    </S.Wrapper>
  );
}
