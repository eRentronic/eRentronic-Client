import { selector } from 'recoil';

import * as API from '@/apis/mainProducts';

import { productsStore } from '../products';

const getIds = (productData: API.ContentType[]) => {
  const productIdList = productData.map(({ product: { id } }) => id);
  return productIdList;
};

export const productIds = selector({
  key: 'productIds',
  get: ({ get }) => {
    const store = get(productsStore);
    const currentIds = getIds(store);
    return currentIds;
  },
});
