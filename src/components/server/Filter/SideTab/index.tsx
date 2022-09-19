import { Category } from './Category';
import * as DATA from './dummy';
import * as S from './index.style';

export function SideTab() {
  const categoryLists = Object.keys(DATA.DUMMY_SIDEBAR_MODEL);
  const categories = categoryLists.map(key => (
    <Category
      key={key}
      categoryLists={DATA.DUMMY_SIDEBAR_MODEL[key]}
      title={DATA.CATEGORY_TITLES[key]}
    />
  ));

  return (
    <S.Wrapper>
      <S.CategoryWrapper>{categories}</S.CategoryWrapper>
    </S.Wrapper>
  );
}
