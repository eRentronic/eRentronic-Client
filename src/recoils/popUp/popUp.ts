import { atom } from 'recoil';

export const defaultPopUpOpenState = { 0: false, 1: false };

export const popUpOpenState = atom({
  key: 'popUpOpenState',
  default: defaultPopUpOpenState,
});
