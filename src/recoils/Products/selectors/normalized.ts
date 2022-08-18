import { selector } from 'recoil';

import * as API from '@/apis/mainProducts';

import { productsStore } from '../products';

export type normalizedProductType = {
  titles: { [key: number]: string };
  contents: { [key: number]: string };
  images: { [key: number]: string };
  prices: { [key: number]: number };
  rentalPrices: { [key: number]: number };
  rentables: { [key: number]: boolean };
  likes: { [key: number]: boolean };
  inBuckets: { [key: number]: boolean };
  vendors: { [key: number]: { id: number; name: string } };
  salePrice: { [key: number]: number };
  saleRentalPrice: { [key: number]: number };
  discountInfos: {
    [key: number]: { id: number; title: string; saleRate: string }[];
  };
};

const normalize = (data: API.ContentType[]) => {
  const test: normalizedProductType = {
    titles: {},
    contents: {},
    images: {},
    prices: {},
    rentables: {},
    rentalPrices: {},
    likes: {},
    inBuckets: {},
    vendors: {},
    discountInfos: {},
    salePrice: {},
    saleRentalPrice: {},
  };

  const normalizedData = data.reduce(
    (
      acc,
      {
        product: {
          id,
          title,
          content: productContent,
          imageUrl,
          price,
          rentable,
          rentalPrice,
          like,
          inBucket,
        },
        vendor: { id: vendorID, name },
        discountInfo: { discounts, salePrice, saleRentalPrice },
      },
    ): normalizedProductType => {
      return {
        titles: { ...acc.titles, [id]: title },
        contents: { ...acc.contents, [id]: productContent },
        images: { ...acc.images, [id]: imageUrl },
        prices: { ...acc.prices, [id]: price },
        rentables: { ...acc.rentables, [id]: rentable },
        rentalPrices: { ...acc.rentalPrices, [id]: rentalPrice },
        likes: { ...acc.likes, [id]: like },
        inBuckets: { ...acc.inBuckets, [id]: inBucket },
        vendors: { ...acc.vendors, [id]: { id: vendorID, name } },
        discountInfos: { ...acc.discountInfos, [id]: discounts },
        salePrice: { ...acc.salePrice, [id]: salePrice },
        saleRentalPrice: { ...acc.saleRentalPrice, [id]: saleRentalPrice },
      };
    },
    test,
  );

  return normalizedData;
};

export const normalizedProducts = selector({
  key: 'normalizedProducts',
  get: ({ get }) => {
    const store = get(productsStore);
    const normalizedState = normalize(store);
    return normalizedState;
  },
});
