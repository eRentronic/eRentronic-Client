import { ComponentPropsWithoutRef, ElementType } from 'react';

export type Combine<T, K> = T & Omit<K, keyof T>;
// T 타입이 가지고 있는 타입을 K타입에서 제거 한후 병합

export type CombineElementProps<T extends ElementType, K = unknown> = Combine<
  K,
  ComponentPropsWithoutRef<T>
>;

export type OverRidableProps<T extends ElementType, K = unknown> = {
  as?: T;
} & CombineElementProps<T, K>;

export type ValueOf<T> = T[keyof T];

export type Dig<T, U extends keyof T> = Pick<T, U>[U];
