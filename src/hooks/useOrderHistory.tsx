import { useQuery } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import {
  historyType,
  rawHistoryType,
  parseOrderHistory,
} from '@/service/Order';

const getHistory = (loginToken: string) => async () => {
  try {
    const { data } = await axios.get(
      `${process.env.ORDER_HISTORY}?accessToken=${loginToken}&startDate=2022-8-31&endDate=2022-12-14`,
    );
    return data;
  } catch (e) {
    throw new Error('구매 내역 에러');
  }
};

export function useOrderHistory() {
  const { value } = useLocalStorage('loginState');
  const { loginToken } = value;

  const { data, isSuccess } = useQuery<
    rawHistoryType[],
    AxiosError,
    historyType[],
    string
  >(['orderHistory'], getHistory(loginToken), {
    select: parseOrderHistory,
  });

  if (isSuccess) {
    return data;
  }
}
