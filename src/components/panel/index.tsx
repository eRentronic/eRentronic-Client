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
        <S.BtnText>{isClicked ? '접기' : '펼치기'}</S.BtnText>
      </S.showPanelBtn>
      <S.GoTopBtn isClicked={isClicked}>
        <S.BtnText>TOP</S.BtnText>
      </S.GoTopBtn>
      <S.DarkModeBtn isClicked={isClicked}>
        <S.Moon iconSrc="MOON" fill="white" />
      </S.DarkModeBtn>
      <S.gotoLogin isClicked={isClicked}>
        <S.BtnText>로그인</S.BtnText>
      </S.gotoLogin>
    </S.PanelWrap>
  );
}
