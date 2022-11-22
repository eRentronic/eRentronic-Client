import { SyntheticEvent } from 'react';

export const stopEventDelivery = (e: SyntheticEvent) => {
  e.stopPropagation();
};

export const mergeNormazliedArr = (arr: Array<any>) => {
  return arr.reduce((resultObj, currentObj) => {
    const keys = Object.keys(currentObj);
    const result = keys.reduce((acc, curr) => {
      return { ...acc, [curr]: { ...resultObj[curr], ...currentObj[curr] } };
    }, {});
    return result;
  }, {});
};

export const normalize = (target: any) => {
  const { id } = target;
  const keys = Object.keys(target);
  const normalizedData = keys.reduce((acc, key) => {
    return { ...acc, [key]: { [id]: target[key] } };
  }, {});
  return normalizedData;
};
