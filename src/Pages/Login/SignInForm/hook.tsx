import { useReducer } from 'react';

import { DefaultAddressState } from '@/hooks/useAddressApi';
import {
  getEmailAction,
  getNameAction,
  getPasswordAction,
  getPasswordConfirmAction,
  getSignInDispatch,
} from '@/Pages/Login/SignInForm/Actions';
import {
  DEFAULT_SIGNIN_STATE,
  signInReducer,
} from '@/Pages/Login/SignInForm/Reducer';
import {
  idValid,
  nameValid,
  signInPasswordValid,
  confirmPasswordValid,
} from '@/service/login';

const getSignInForm = (
  address: DefaultAddressState,
  signInState: typeof DEFAULT_SIGNIN_STATE,
) => ({
  address: { ...address, fulladdress: address.address1 + address.address2 },
  ...signInState,
});

export function useSignIn(address: DefaultAddressState) {
  const [signInState, signInDispatch] = useReducer(
    signInReducer,
    DEFAULT_SIGNIN_STATE,
  );

  const { email, password, passwordConfirm, name } = signInState;

  const signInData = getSignInForm(address, signInState);

  const signInKeys = Object.keys(signInState) as Array<
    keyof typeof signInState
  >;

  const idErrorMessages = idValid(email);
  const passwordErrorMessages = signInPasswordValid(password);
  const nameErrorMessges = nameValid(name);
  const confirmPasswordErrorMessages = confirmPasswordValid({
    first: password,
    second: passwordConfirm,
  });

  const eMailDispatch = getSignInDispatch(signInDispatch, getEmailAction);
  const passwordDispatch = getSignInDispatch(signInDispatch, getPasswordAction);
  const passwordConfirmDispatch = getSignInDispatch(
    signInDispatch,
    getPasswordConfirmAction,
  );
  const nameDispatch = getSignInDispatch(signInDispatch, getNameAction);

  const addressKeys = Object.keys(address) as Array<keyof typeof address>;
  const isSignInFilled = !!signInKeys.find(key => !signInState[key]);
  const isAddressFilled = !!addressKeys.find(key => !address[key]);

  const hasWrongInput =
    !!idErrorMessages.find(value => value) ||
    !!confirmPasswordErrorMessages.find(value => value) ||
    !!passwordErrorMessages.find(value => value) ||
    !!nameErrorMessges.find(value => value);

  return {
    signInData,
    signInDispatch,
    isSignInFilled,
    isAddressFilled,
    hasWrongInput,
    idErrorMessages,
    passwordErrorMessages,
    nameErrorMessges,
    confirmPasswordErrorMessages,
    eMailDispatch,
    passwordDispatch,
    passwordConfirmDispatch,
    nameDispatch,
  };
}
