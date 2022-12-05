/* eslint-disable react/no-unused-prop-types */
import React, { useReducer } from 'react';

import {
  getDefaultState,
  getAction,
  filterModelType,
  filterModelDataType,
} from '@/service/filter';

import { Category } from './Category/Category';
import * as S from './index.style';
import { reducer } from './reducer';

export type SideTapProps = {
  keyboardConnections: {
    id: number;
    name: string;
  }[];
  layouts: {
    id: number;
    name: string;
  }[];
  switches: {
    id: number;
    name: string;
  }[];

  vendors: {
    id: number;
    name: string;
  }[];
};

const SIDE_TAB_TITLE: { [key: string]: string } = {
  keyboardConnections: '연결',
  layouts: '레이아웃',
  switches: '스위치',
  vendors: '제조사',
} as const;

export function SideTab(props: SideTapProps) {
  const filterState = getDefaultState(props);
  const [sideTabToggleState, sideTabToggleStateDispatch] = useReducer(
    reducer,
    filterState,
  );

  const categoryLists = Object.entries(filterState) as Array<
    [keyof filterModelType, filterModelDataType]
  >;

  const categories = categoryLists.map(([key, value]) => {
    const { data } = value;
    const { viewMore } = sideTabToggleState[key];
    const clickAction = getAction(key, sideTabToggleState);

    const onClickCategory = () => {
      sideTabToggleStateDispatch(clickAction);
    };

    return (
      <Category
        key={key}
        categoryLists={data}
        title={SIDE_TAB_TITLE[key]}
        onClickCategory={onClickCategory}
        isDisplay={viewMore}
      />
    );
  });

  return (
    <S.Wrapper>
      <S.CategoryWrapper>{categories}</S.CategoryWrapper>
    </S.Wrapper>
  );
}
