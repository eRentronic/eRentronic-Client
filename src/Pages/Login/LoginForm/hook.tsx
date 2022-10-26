import { useReducer } from 'react';

import {
  getIdAction,
  getLoginDispatch,
  getPasswordAction,
} from '@/Pages/Login/LoginForm/Actions';
import {
  loginReducer,
  DEFAULT_LOGIN_STATE,
} from '@/Pages/Login/LoginForm/Reducer';
import { idValid, passwordValid } from '@/service/login';

export function useLogin() {
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    DEFAULT_LOGIN_STATE,
  );
  const { id, password } = loginState;

  const idDispatch = getLoginDispatch(loginDispatch, getIdAction);
  const passwordDipatch = getLoginDispatch(loginDispatch, getPasswordAction);

  const idErrorMessages = idValid(id);
  const passwordErrorMessages = passwordValid(password);
  return {
    id,
    password,
    loginDispatch,
    idDispatch,
    passwordDipatch,
    idErrorMessages,
    passwordErrorMessages,
  };
}
