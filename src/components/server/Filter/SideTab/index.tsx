import React, { useReducer } from 'react';

import { Category } from './Category';
import * as S from './index.style';

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

const DEFAULT_SIDETAB_TOGGLE = {
  connection: { popUp: false, viewMore: false },
  layout: { popUp: false, viewMore: false },
  keyboardSwitch: { popUp: false, viewMore: false },
  vendor: { popUp: false, viewMore: false },
};

type actionType = {
  type: string;
  payload: { popUp: boolean; viewMore: boolean };
};

const reducer = (state: typeof DEFAULT_SIDETAB_TOGGLE, action: actionType) => {
  const { type, payload } = action;
  switch (type) {
    case 'dispatchConnection':
      return {
        ...state,
        connection: payload,
      };

    case 'dispatchLayout':
      return { ...state, layout: payload };

    case 'dispatchSwitch':
      return {
        ...state,
        keyboardSwitch: payload,
      };

    case 'dispatchVendor':
      return { ...state, vendor: payload };

    case 'reset':
      return { ...DEFAULT_SIDETAB_TOGGLE };

    default:
      return { ...state };
  }
};

const getFilterData = (
  { keyboardConnections, layouts, switches, vendors }: SideTapProps,
  sideTabToggleState: typeof DEFAULT_SIDETAB_TOGGLE,
  sideTabToggleStateDispatch: React.Dispatch<actionType>,
) => {
  const { connection, layout, keyboardSwitch, vendor } = sideTabToggleState;
  return {
    keyboardConnections: {
      ...keyboardConnections,
      view: connection,
      toggleDispatch: sideTabToggleStateDispatch,

      popUpAction: {
        type: 'dispatchConnection',
        payload: { ...connection, popup: !connection.popUp },
      },

      viewMoreAction: {
        type: 'dispatchConnection',
        payload: { ...connection, viewMore: !connection.viewMore },
      },
    },
    layouts: {
      ...layouts,
      view: layout,
      toggleDispatch: sideTabToggleStateDispatch,

      popUpAction: {
        type: 'dispatchLayout',
        payload: { ...layout, popup: !layout.popUp },
      },

      viewMoreAction: {
        type: 'dispatchLayout',
        payload: { ...layout, viewMore: !layout.viewMore },
      },
    },
    switches: {
      ...switches,
      view: keyboardSwitch,
      toggleDispatch: sideTabToggleStateDispatch,

      popUpAction: {
        type: 'dispatchSwitch',
        payload: { ...keyboardSwitch, popup: !keyboardSwitch.popUp },
      },

      viewMoreAction: {
        type: 'dispatchSwitch',
        payload: { ...keyboardSwitch, viewMore: !keyboardSwitch.viewMore },
      },
    },
    vendors: {
      ...vendors,
      view: vendor,
      toggleDispatch: sideTabToggleStateDispatch,

      popUpAction: {
        type: 'dispatchVendor',
        payload: { ...vendor, popup: !vendor.popUp },
      },

      viewMoreAction: {
        type: 'dispatchVendor',
        payload: { ...vendor, viewMore: !vendor.viewMore },
      },
    },
  };
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

  const onClickCategory =
    (action: actionType, dispatch: React.Dispatch<actionType>) => () => {
      dispatch(action);
    };

  const categoryLists = Object.entries(productFilterData);
  const categories = categoryLists.map(([key, value]) => (
    <Category
      key={key}
      categoryLists={value}
      title={key}
      view={value.view}
      onClickTitle={onClickCategory(value.popUpAction, value.toggleDispatch)}
      onClickViewMoreButton={onClickCategory(
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
