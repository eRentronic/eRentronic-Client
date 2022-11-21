import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

import { MainProductsType } from '@/service/product';

export const getMainProducts = async () => {
  try {
    const { data } = await axios(`${process.env.MAIN_PRODUCTS}`);
    return data;
  } catch (e) {
    console.error('메인 제품 패칭 에러');
    throw e;
  }
};

type useMainProductsProps<T> = UseQueryOptions<MainProductsType, AxiosError, T>;

export function useMainProducts<formatedDataType>(
  options: useMainProductsProps<formatedDataType>,
) {
  const { select } = options!;

  const { data, isSuccess } = useQuery<
    MainProductsType,
    AxiosError,
    formatedDataType
  >(['productQueryKey'], getMainProducts, {
    select,
  });

  if (isSuccess) {
    return data;
  }
}
