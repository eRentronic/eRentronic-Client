export type actionType = {
  type: string;
  payload: boolean;
  key: keyof filterModelType;
};

export type filterModelDataType = {
  data: {
    id: number;
    name: string;
  }[];
  viewMore: boolean;
};

export type filterModelType = {
  keyboardConnections: filterModelDataType;
  layouts: filterModelDataType;
  switches: filterModelDataType;
  vendors: filterModelDataType;
};

type filterDataType = {
  [key: string]: {
    id: number;
    name: string;
  }[];

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

const DEFAULT_SIDE_TAB_STATE: filterModelType = {
  keyboardConnections: { data: [], viewMore: false },
  vendors: { data: [], viewMore: false },
  switches: { data: [], viewMore: false },
  layouts: { data: [], viewMore: false },
};

export const getDefaultState = (filterdata: filterDataType) => {
  const keys = Object.keys(filterdata);

  return keys.reduce(
    (acc, key) => ({
      ...acc,
      [key]: { viewMore: false, data: filterdata[key] },
    }),
    DEFAULT_SIDE_TAB_STATE,
  );
};

export const getAction = (
  key: keyof filterModelType,
  state: filterModelType,
): actionType => {
  return { type: 'dispatchViewMore', payload: !state[key].viewMore, key };
};
