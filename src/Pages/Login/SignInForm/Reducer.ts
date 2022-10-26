import { Action } from './Actions';

export const DEFAULT_SIGNIN_STATE = {
  email: '',
  password: '',
  passwordConfirm: '',
  name: '',
};

export const signInReducer = (
  state: typeof DEFAULT_SIGNIN_STATE,
  action: Action | { type: 'reset' },
) => {
  switch (action.type) {
    case 'setEmail':
      return { ...state, email: action.payload };

    case 'setPassword':
      return { ...state, password: action.payload };

    case 'setPasswordConfirm':
      return { ...state, passwordConfirm: action.payload };

    case 'setName':
      return { ...state, name: action.payload };

    case 'reset':
      return DEFAULT_SIGNIN_STATE;

    default:
      return state;
  }
};
