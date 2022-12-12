import { useState } from 'react';

import { Text } from '@/components/common';

import * as S from './category.style';
import * as TYPE from './category.type';

const MAXIMUM_LISTLENGTH = 3;
const MINIMUN_LISTLENGTH = 0;

export function Category({
  categoryLists,
  title,
  isDisplay,
  onClickCategory,
}: TYPE.CategoryProps) {
  const [viewMore, setViewMore] = useState(false);
  const listData = viewMore
    ? categoryLists
    : categoryLists.slice(MINIMUN_LISTLENGTH, MAXIMUM_LISTLENGTH);

  const list = listData.map(({ name, id }) => <S.List key={id}>{name}</S.List>);

  const onClickViewMoreButton = () => {
    setViewMore(!viewMore);
  };

  return (
    <>
      <S.CategoryTitle
        forwardedAs="h4"
        typography="Bold"
        onClick={onClickCategory}
      >
        {title}
      </S.CategoryTitle>
      <S.CategoryList isDisplay={isDisplay}>
        {list}
        <S.ViewMoreBtn onClick={onClickViewMoreButton} isDisplay={viewMore}>
          <Text typography="Thin" color="white">
            더보기
          </Text>
        </S.ViewMoreBtn>
      </S.CategoryList>
    </>
  );
}
