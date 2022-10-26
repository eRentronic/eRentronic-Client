import { Dispatch } from 'react';

export type Action = {
  type: string;
  payload: string;
};

export const getSignInDispatch =
  (
    dispatch: Dispatch<Action>,
    actionCreator:
      | typeof getEmailAction
      | typeof getPasswordAction
      | typeof getPasswordConfirmAction
      | typeof getNameAction,
  ) =>
  (value: string) => {
    const action = actionCreator(value);
    dispatch(action);
  };

export const getEmailAction = (value: string) => ({
  type: 'setEmail',
  payload: value,
});
export const getPasswordAction = (value: string) => ({
  type: 'setPassword',
  payload: value,
});
export const getPasswordConfirmAction = (value: string) => ({
  type: 'setPasswordConfirm',
  payload: value,
});
export const getNameAction = (value: string) => ({
  type: 'setName',
  payload: value,
});
