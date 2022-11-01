import { SideTab } from '@/components/server/Filter/SideTab';
import { filterModelType } from '@/service/filter';

import * as S from './style';

type AsideProps = filterModelType | undefined;

export function Aside(props: AsideProps) {
  const sideTab = props ? <SideTab {...props} /> : <div>에러</div>;

  return <S.StyledAside>{sideTab}</S.StyledAside>;
}
