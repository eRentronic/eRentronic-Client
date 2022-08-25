import { useState, MouseEvent } from 'react';
import { useRecoilState } from 'recoil';

import { DarkModeStore } from '@/recoils/dark/dark';

import * as S from './index.style';

import { Icon } from '../../common';

export function Panel() {
  const [isClicked, setIsClicked] = useState(false);
  const [isDarkMode, setIsDarkMode] = useRecoilState(DarkModeStore);
  function changeColorMode() {
    setIsDarkMode(!isDarkMode);
  }
  function showHiddenBtn(e: MouseEvent) {
    e.stopPropagation();
    setIsClicked(true);
  }
  function toggleBtn(e: MouseEvent) {
    e.stopPropagation();
    setIsClicked(!isClicked);
  }
  function goTop() {
    window.scrollTo(0, 0);
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
      <S.GoTopBtn
        isClicked={isClicked}
        onClick={() => {
          goTop();
        }}
      >
        <S.BtnText>TOP</S.BtnText>
      </S.GoTopBtn>
      <S.DarkModeBtn
        isClicked={isClicked}
        darkMode={isDarkMode}
        onClick={() => {
          changeColorMode();
        }}
      >
        {isDarkMode ? (
          <Icon iconSrc="SUN" fill="black" />
        ) : (
          <Icon iconSrc="MOON" fill="white" />
        )}
      </S.DarkModeBtn>
      <S.GotoLogin isClicked={isClicked}>
        <S.BtnText>로그인</S.BtnText>
      </S.GotoLogin>
    </S.PanelWrap>
  );
}
