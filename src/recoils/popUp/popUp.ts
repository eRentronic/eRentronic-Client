import { atom } from 'recoil';

// TODO: 상수 리팩토링시 헤더의 팝업 상태를 reduce해서 기본값을 생성하는 식으로 리팩토링 가능
export const defaultPopUpOpenState = { 0: false, 1: false };

export const popUpOpenState = atom({
  key: 'popUpOpenState',
  default: defaultPopUpOpenState,
});
