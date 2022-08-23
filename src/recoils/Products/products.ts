import { atom } from 'recoil';

import { ContentType } from '@/apis/mainProducts';

export const defaultProductsStore: ContentType[] = [];

export const productsStore = atom({
  key: 'productsStore',
  default: defaultProductsStore,
});
