import { Dispatch } from 'react';

export type Action = {
  type: string;
  payload: string;
};

export const getLoginDispatch =
  (
    dispatch: Dispatch<Action>,
    actionCreator: typeof getIdAction | typeof getPasswordAction,
  ) =>
  (value: string) => {
    const action = actionCreator(value);
    dispatch(action);
  };

export const getIdAction = (value: string) => ({
  type: 'setID',
  payload: value,
});
export const getPasswordAction = (value: string) => ({
  type: 'setPassword',
  payload: value,
});
