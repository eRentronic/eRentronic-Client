export type MainProductsType = {
  content: ContentType[];
  pageable: {
    sort: {
      sorted: boolean;
      unsorted: boolean;
      empty: true;
    };
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  numberOfElements: number;
  number: number;
  first: boolean;
  last: boolean;
  size: number;
  sort: {
    sorted: boolean;
    unsorted: boolean;
    empty: boolean;
  };
  empty: boolean;
};

export type ContentType = {
  product: {
    id: number;
    title: string;
    content: string;
    imageUrl: string;
    price: number;
    rentable: boolean;
    like: boolean;
    inBucket: boolean;
    rentalPrice: number;
  };
  discountInfo: {
    discounts: { id: number; title: string; saleRate: string }[];
    salePrice: number;
    saleRentalPrice: number;
  };
  vendor: { id: number; name: string };
};
