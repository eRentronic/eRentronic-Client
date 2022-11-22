import { atom } from 'recoil';

export const defaultFilterState = {
  vendors: {},
  keyboardConnections: {},
  switches: {},
  layouts: {},
};

export const filterStore = atom({
  key: 'filterstore',
  default: defaultFilterState,
});
