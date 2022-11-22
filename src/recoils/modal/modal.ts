import { atom } from 'recoil';

const defaultModalState = false;

export const modalStore = atom({
  key: 'modalStore',
  default: defaultModalState,
});
