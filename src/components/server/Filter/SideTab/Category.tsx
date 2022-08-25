import { useState } from 'react';

import * as S from './category.style';
import * as TYPE from './category.type';

export function Category({ categoryLists, title }: TYPE.CategoryProps) {
  const [isClicked, setIsClicked] = useState(false);
  const [viewMore, setViewMore] = useState(false);

  const itemLists = viewMore ? categoryLists : categoryLists.slice(0, 2);
  const items = itemLists.map(({ name }) => <S.List>{name}</S.List>);

  return (
    <>
      <S.CategoryTitle
        forwardedAs="h4"
        typography="Bold"
        onClick={() => {
          setIsClicked(!isClicked);
        }}
      >
        {title}
      </S.CategoryTitle>
      <S.CategoryList isDisplay={isClicked}>
        {items}
        <S.ViewMoreBtn
          onClickHandler={() => {
            setViewMore(!viewMore);
          }}
          isDisplay={viewMore}
        >
          <S.ViewMoreText typography="Thin" color="white">
            더보기
          </S.ViewMoreText>
        </S.ViewMoreBtn>
      </S.CategoryList>
    </>
  );
}
