import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';

import { filterModelType } from '@/service/filter';

const getProductsFilter = async () => {
  try {
    const { data } = await axios(`${process.env.PRODUCTS_FILTER}`);
    return data;
  } catch (e) {
    console.error('메인 제품 패칭 에러');
    throw e;
  }
};

type ProductsFilterProps<T = filterModelType> = UseQueryOptions<
  filterModelType,
  AxiosError,
  T
>;

export function useProductsFilter<formatedDataType = filterModelType>(
  options?: ProductsFilterProps<formatedDataType>,
) {
  const { select } = options!;

  const { data, isSuccess } = useQuery<
    filterModelType,
    AxiosError,
    formatedDataType
  >(['productFilterQueryKey'], getProductsFilter, { select });

  if (isSuccess) {
    return data;
  }
}
