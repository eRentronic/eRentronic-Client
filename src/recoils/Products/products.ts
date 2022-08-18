import { atom } from 'recoil';

export type productsStoreType = {
  titles: { [key: number]: string };
  contents: { [key: number]: string };
  images: { [key: number]: string };
  prices: { [key: number]: number };
  rentalPrices: { [key: number]: number };
  rentables: { [key: number]: boolean };
  likes: { [key: number]: boolean };
  inBuckets: { [key: number]: boolean };
  vendors: { [key: number]: { id: number; name: string } };
  discountInfos: {
    [key: number]: {
      discounts: { id: number; title: string; saleRate: string }[];
      salePrice: number;
      saleRentalPrice: number;
    };
  };
};

export const defaultProductsStore = {
  titles: {},
  contents: {},
  images: {},
  prices: {},
  rentalPrices: {},
  rentables: {},
  likes: {},
  inBuckets: {},
  vendors: {},
  discountInfos: {},
};

export const productsStore = atom({
  key: 'productsStore',
  default: defaultProductsStore,
});
