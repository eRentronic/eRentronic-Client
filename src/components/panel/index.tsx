import { useState, MouseEvent } from 'react';

import * as S from './index.style';

export function Panel() {
  const [isClicked, setIsClicked] = useState(false);

  function showHiddenBtn(e: MouseEvent) {
    e.stopPropagation();
    setIsClicked(true);
  }
  function toggleBtn(e: MouseEvent) {
    e.stopPropagation();
    setIsClicked(!isClicked);
  }
  return (
    <S.PanelWrap>
      <S.showPanelBtn
        onMouseEnter={e => {
          showHiddenBtn(e);
        }}
        onClick={e => {
          toggleBtn(e);
        }}
        isClicked={isClicked}
      >
        {isClicked ? '접기' : '펼치기'}
      </S.showPanelBtn>
      <S.GoTopBtn isClicked={isClicked}>맨 위로</S.GoTopBtn>
      <S.DarkModeBtn isClicked={isClicked}>다크모드</S.DarkModeBtn>
      <S.gotoLogin isClicked={isClicked}>로그인</S.gotoLogin>
    </S.PanelWrap>
  );
}
