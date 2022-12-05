import { filterModelType, actionType } from '@/service/filter';

export const DEFAULT_SIDETAB_STATE: filterModelType = {
  keyboardConnections: { data: [], viewMore: false },
  layouts: { data: [], viewMore: false },
  switches: { data: [], viewMore: false },
  vendors: { data: [], viewMore: false },
};

export const reducer = (
  state: filterModelType,
  action: actionType,
): filterModelType => {
  const { type, payload, key } = action;
  switch (type) {
    case 'dispatchViewMore':
      return {
        ...state,
        [key]: { ...state[key], viewMore: payload },
      };

    case 'reset':
      return { ...DEFAULT_SIDETAB_STATE };

    default:
      return { ...state };
  }
};

type sideTabReducerType = {
  state: typeof DEFAULT_SIDETAB_STATE;
  action: { type: string; keyOfSideTabState: keyof filterModelType };
};

export function sideTabReducer({ state, action }: sideTabReducerType) {
  const { type, keyOfSideTabState } = action;

  switch (type) {
    case 'dispatchToggle':
      return {
        ...state,
        [keyOfSideTabState]: !state[keyOfSideTabState].viewMore,
      };

    default:
      return DEFAULT_SIDETAB_STATE;
  }
}
