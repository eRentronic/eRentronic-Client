import { Text } from '@/components/common';

import * as S from './category.style';
import * as TYPE from './category.type';

export function Category({
  categoryLists,
  title,
  view,
  onClickTitle,
  onClickViewMoreButton,
}: TYPE.CategoryProps) {
  const { viewMore, popUp } = view;
  const listData = viewMore ? categoryLists : categoryLists.slice(0, 3);
  const list = listData.map(({ name, id }) => <S.List key={id}>{name}</S.List>);

  return (
    <>
      <S.CategoryTitle
        forwardedAs="h4"
        typography="Bold"
        onClick={onClickTitle}
      >
        {title}
      </S.CategoryTitle>
      <S.CategoryList isDisplay={popUp}>
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
