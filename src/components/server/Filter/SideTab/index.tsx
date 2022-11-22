import React, { useReducer } from 'react';

import { getFilterData } from '@/service/filter';

import { Category } from './Category';
import * as S from './index.style';
import { reducer, actionType, DEFAULT_SIDETAB_TOGGLE } from './reducer';

type SideTapProps = {
  keyboardConnections: {
    id: 0;
    name: 'string';
  }[];
  layouts: {
    id: 0;
    name: 'string';
  }[];
  switches: {
    id: 0;
    name: 'string';
  }[];

  vendors: {
    id: 0;
    name: 'string';
  }[];
};

const SIDE_TAB_TITLE: { [key: string]: string } = {
  keyboardConnections: '연결',
  layouts: '레이아웃',
  switches: '스위치',
  vendors: '제조사',
};

export function SideTab({
  keyboardConnections,
  layouts,
  switches,
  vendors,
}: SideTapProps) {
  const [sideTabToggleState, sideTabToggleStateDispatch] = useReducer(
    reducer,
    DEFAULT_SIDETAB_TOGGLE,
  );
  const filterModel = { keyboardConnections, layouts, switches, vendors };

  const productFilterData = getFilterData(
    filterModel,
    sideTabToggleState,
    sideTabToggleStateDispatch,
  );

  const getCategoryHandler =
    (action: actionType, dispatch: React.Dispatch<actionType>) => () => {
      dispatch(action);
    };
  const categoryLists = Object.entries(productFilterData);
  const categories = categoryLists.map(([key, value]) => (
    <Category
      key={key}
      categoryLists={value.data}
      title={SIDE_TAB_TITLE[key]}
      view={value.view}
      onClickTitle={getCategoryHandler(value.popUpAction, value.toggleDispatch)}
      onClickViewMoreButton={getCategoryHandler(
        value.viewMoreAction,
        value.toggleDispatch,
      )}
    />
  ));

  return (
    <S.Wrapper>
      <S.CategoryWrapper>{categories}</S.CategoryWrapper>
    </S.Wrapper>
  );
}
