import { useState } from 'react';

import * as S from './category.style';
import * as TYPE from './category.type';

export function Category({ categoryLists, title }: TYPE.CategoryProps) {
  const [isClicked, setIsClicked] = useState(false);

  const Vendors = categoryLists.map(({ name }) => <S.List>{name}</S.List>);

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
      <S.CategoryList isDisplay={isClicked}>{Vendors}</S.CategoryList>
    </>
  );
}
