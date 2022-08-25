import { Category } from './Category';
import * as DATA from './dummy';
import * as S from './index.style';

export function SideTab() {
  const categoryLists = Object.keys(DATA.DUMMY_SIDEBAR_MODEL);
  const test = categoryLists.map(key => (
    <Category
      categoryLists={DATA.DUMMY_SIDEBAR_MODEL[key]}
      title={DATA.CATEGORY_TITLES[key]}
    />
  ));

  return (
    <S.Wrapper>
      <S.CategoryWrapper>{test}</S.CategoryWrapper>
    </S.Wrapper>
  );
}
