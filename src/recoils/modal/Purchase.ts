import { atom } from 'recoil';

const defaultPurchaseModalState = false;

export const purchaseModalStore = atom({
  key: 'purChaseModalStore',
  default: defaultPurchaseModalState,
});
