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
  product: Product;

  discountInfo: {
    discounts: Discount;
    salePrice: number;
    saleRentalPrice: number;
  };

  vendor: { id: number; name: string };
};

export type ProductDetail = {
  product: Product;
  keyboardId: number;
  vendor: {
    id: number;
    name: string;
  };
  connection: {
    id: number;
    name: string;
  };
  keyboardSwitches: {
    id: number;
    name: string;
  }[];
  layout: {
    id: number;
    name: string;
  };
  keyboardImages: {
    id: number;
    imageUrl: string;
  }[];
  discountInfoResponse: {
    discounts: Discount;
    salePrice: number;
    saleRentalPrice: number;
  };
};

export type Product = {
  id: number;
  title: string;
  content: string;
  imageUrl: string;
  price: number;
  quantity: number;
  rentalPrice: number;
  rentalProductQuantity: number;
  rentable: true;
  like: false;
  inBucket: false;
};

export type Discount = {
  id: number;
  title: string;
  saleRate: string;
}[];
