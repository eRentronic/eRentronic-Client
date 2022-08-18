import { atom } from 'recoil';

import { ContentType } from '@/apis/mainProducts';

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

export const defaultProductsStore: ContentType[] = [];

export const productsStore = atom({
  key: 'productsStore',
  default: defaultProductsStore,
});
