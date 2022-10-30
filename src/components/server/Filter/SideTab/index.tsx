import { Category } from './Category';
import * as S from './index.style';

type SideTapProps = {
  keyboardConnections: {
    id: 0;
    name: 'string';
  }[];
  layouts: {
    id: 0;
    name: 'string';
  }[];
  switches: {
    id: 0;
    name: 'string';
  }[];

  vendors: {
    id: 0;
    name: 'string';
  }[];
};

export function SideTab({
  keyboardConnections,
  layouts,
  switches,
  vendors,
}: SideTapProps) {
  const productFilterData = { keyboardConnections, layouts, switches, vendors };
  const categoryLists = Object.entries(productFilterData);
  const categories = categoryLists.map(([key, value]) => (
    <Category key={key} categoryLists={value} title={key} />
  ));

  return (
    <S.Wrapper>
      <S.CategoryWrapper>{categories}</S.CategoryWrapper>
    </S.Wrapper>
  );
}
