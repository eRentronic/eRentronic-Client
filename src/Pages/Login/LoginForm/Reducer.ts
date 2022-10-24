import { Action } from './Actions';

export const DEFAULT_LOGIN_STATE = {
  id: '',
  password: '',
};

export const loginReducer = (
  state: typeof DEFAULT_LOGIN_STATE,
  action: Action | { type: 'reset' },
) => {
  switch (action.type) {
    case 'setID':
      return { ...state, id: action.payload };

    case 'setPassword':
      return { ...state, password: action.payload };

    case 'reset':
      return DEFAULT_LOGIN_STATE;

    default:
      return state;
  }
};
