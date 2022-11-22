import { Icon } from '@/components/common';

import * as S from './index.style';

export function MainInput() {
  return (
    <S.StyledForm>
      <S.StyledInput type="search" placeholder="검색어를 입력하세요" />
      <S.StyledBtn>
        <Icon iconSrc="SEARCH" width={25} height={25} />
      </S.StyledBtn>
    </S.StyledForm>
  );
}
