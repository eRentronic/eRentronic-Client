import { AxiosError } from 'axios';
import { Dispatch, ChangeEvent } from 'react';
import styled from 'styled-components';

import { Logo } from '@/components/common/Logo';
import { useAddressApi } from '@/hooks/useAddressApi';
import { useMutationPost } from '@/hooks/useMutationPost';
import {
  SignInPanel,
  PasswordForm,
  EmailForm,
  NameForm,
  AddressForm,
} from '@/Pages/Login/SignInForm/components';
import { useSignIn } from '@/Pages/Login/SignInForm/hook';

const onChangeInput =
  (setterFunc: Dispatch<string>) => (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setterFunc(value);
  };

const ID = '아이디' as const;
const PASSWORD = '비밀번호' as const;
const URL = `${process.env.SIGN_IN}`;

type SigninResponse = {
  message: string;
  error: unknown;
};

type SignInProps = {
  messageDispatch: Dispatch<string>;
  modalDisplayDispatch: Dispatch<boolean>;
  routeToLogin: () => void;
};

export function SignInForm({
  messageDispatch,
  modalDisplayDispatch,
  routeToLogin,
}: SignInProps) {
  const {
    addressControll,
    address,
    setDetailAddress,
    reset: resetAddress,
  } = useAddressApi();

  const {
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
  } = useSignIn(address);

  const onSignInFail = (
    error: AxiosError<SigninResponse, typeof signInData>,
  ) => {
    modalDisplayDispatch(true);
    const res = error.response!;
    messageDispatch(res.data.message);
  };

  const onSignInSuccess = () => {
    signInDispatch({ type: 'reset' });
    resetAddress();
    routeToLogin();
  };

  const { mutate } = useMutationPost(
    URL,
    signInData,
    onSignInSuccess,
    onSignInFail,
  );

  const onChangeID = onChangeInput(eMailDispatch);
  const onChangePassword = onChangeInput(passwordDispatch);
  const onChangeConfirmPassword = onChangeInput(passwordConfirmDispatch);
  const onChangeName = onChangeInput(nameDispatch);
  const onChageAddressDetail = onChangeInput(setDetailAddress);
  const onClickSignIn = () => {
    routeToLogin();
    mutate();
  };

  const onClickLoginRouteButton = () => {
    routeToLogin();
  };

  const SignInPanelProps = {
    onClickSignIn,
    onClickLoginRouteButton,
    isSignInFilled,
    isAddressFilled,
    hasWrongInput,
  };

  const passwordFormProps = {
    onChangePassword,
    confirmPasswordErrorMessages,
    PASSWORD,
    passwordErrorMessages,
    onChangeConfirmPassword,
  };

  const emailFormProps = { ID, onChangeID, idErrorMessages };

  const nameFormProps = { nameErrorMessges, onChangeName };

  const addressFormProps = { address, addressControll, onChageAddressDetail };

  return (
    <SignInLayout>
      <Logo size="small" />
      <EmailForm {...emailFormProps} />
      <PasswordForm {...passwordFormProps} />
      <NameForm {...nameFormProps} />
      <AddressForm {...addressFormProps} />
      <SignInPanel {...SignInPanelProps} />
    </SignInLayout>
  );
}

const SignInLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;
