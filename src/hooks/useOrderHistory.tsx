import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

import {
  historyType,
  rawHistoryType,
  parseOrderHistory,
} from '@/service/Order';

const getHistory = async () => {
  try {
    const { data } = await axios.get(process.env.ORDER_HISTORY!);
    return data;
  } catch (e) {
    throw new Error('구매 내역 에러');
  }
};

export function useOrderHistory() {
  const { data, isSuccess } = useQuery<
    rawHistoryType[],
    AxiosError,
    historyType[],
    string
  >(['orderHistory'], getHistory, {
    select: parseOrderHistory,
  });

  if (isSuccess) {
    return data;
  }
}
