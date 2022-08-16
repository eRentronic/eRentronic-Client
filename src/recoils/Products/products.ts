import { atom } from 'recoil';

export const defaultProductsStore = {
  titles: {},
  contents: {},
  images: {},
  prices: {},
  rentalPrices: {},
  rentables: {},
  likes: {},
  inBucket: {},
  vendors: {},
  discountInfos: {},
};

export const productsStore = atom({
  key: 'productsStore',
  default: defaultProductsStore,
});
