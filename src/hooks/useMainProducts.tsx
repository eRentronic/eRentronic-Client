import {
  InfiniteData,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
} from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

import { MainProductsType } from '@/service/product';

export const getMainProducts = async ({ pageParam = 0 }) => {
  try {
    const { data } = await axios(`${process.env.MAIN_PRODUCTS}${pageParam}`);
    return data;
  } catch (e) {
    console.error('메인 제품 패칭 에러');
    throw e;
  }
};

type useMainProductsProps<T> = {
  mergePages?: (data?: InfiniteData<T>) => T;
} & UseInfiniteQueryOptions<MainProductsType, AxiosError, T>;

export function useMainProducts<formatedDataType>(
  options: useMainProductsProps<formatedDataType>,
) {
  const { select, mergePages } = options!;

  const { data, isSuccess, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<MainProductsType, AxiosError, formatedDataType>(
      ['productQueryKey'],
      getMainProducts,
      {
        select,
        getNextPageParam: (lastPage, allPages) => allPages.length,
      },
    );

  const infiniteData = mergePages!(data);

  if (isSuccess) {
    return { infiniteData, fetchNextPage, isFetchingNextPage };
  }
}
