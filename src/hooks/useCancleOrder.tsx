import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

const patchCancleOrder = (orderSheetId: number) => async () => {
  try {
    const data = axios.patch(`${process.env.CANCLE_ORDER}${orderSheetId}`);
    return data;
  } catch (e) {
    throw new Error('주문 취소 에러');
  }
};

export const useCancleOrder = (orderSheetId: number) => {
  const { mutate, isSuccess, data } = useMutation(
    ['cancelOrder'],
    patchCancleOrder(orderSheetId),
  );

  if (isSuccess) {
    return { mutate, data };
  }
};
