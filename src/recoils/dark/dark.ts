import { atom } from 'recoil';

const defaultDarkModeState = false;

export const DarkModeStore = atom({
  key: 'darkModeStore',
  default: defaultDarkModeState,
});
