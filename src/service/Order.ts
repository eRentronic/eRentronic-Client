export type rawHistoryType = {
  orderSheetId: number;
  state: string;
  totalPrice: number;
  createAt: Date;
  address: addressType;
  orderHistoryResponses: [orderHistoryType];
};

type addressType = {
  address1: string;
  address2: string;
  fullAddress: string;
  zipCode: string;
};

type orderHistoryType = {
  discountDetail: string;
  orderId: number;
  price: number;
  product: productType;
  quantity: number;
  salePrice: number;
  totalDiscountRate: number;
};

type productType = {
  content: string;
  id: number;
  imageUrl: string;
  inBucket: boolean;
  like: true;
  price: number;
  quantity: number;
  rentable: boolean;
  rentalPrice: number;
  rentalProductQuantity: number;
  title: string;
};

export type historyType = {
  orderSheetId: number;
  state: string;
  title: string;
  price: number;
  imageUrl: string;
  createAt: Date;
};

export const parseOrderHistory = (
  histories: rawHistoryType[],
): historyType[] => {
  const data = histories.map(
    ({
      orderSheetId,
      state,
      createAt,
      orderHistoryResponses: [
        {
          product: { imageUrl, title, price },
        },
      ],
    }) => ({
      orderSheetId,
      state,
      title,
      price,
      imageUrl,
      createAt,
    }),
  );
  return data;
};
