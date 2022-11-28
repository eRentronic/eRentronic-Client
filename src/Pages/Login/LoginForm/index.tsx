import { AxiosResponse } from 'axios';
import { Dispatch, ChangeEvent } from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useMutationPost } from '@/hooks/useMutationPost';
import {
  LoginLogo,
  UserIdentifyForm,
  LoginPanel,
} from '@/Pages/Login/LoginForm/components';

import { useLogin } from './hook';

const onChangeInput =
  (dispatch: Dispatch<string>) => (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    dispatch(value);
  };

const ID = '아이디' as const;
const PASSWORD = '비밀번호' as const;
const URL = `${process.env.LOG_IN}`;

type LoginFormProps = {
  routeToPassword: () => void;
};

export function LoginForm({ routeToPassword }: LoginFormProps) {
  const {
    id,
    password,
    loginDispatch,
    idDispatch,
    passwordDipatch,
    idErrorMessages,
    passwordErrorMessages,
  } = useLogin();

  const { value, setValue } = useLocalStorage('loginState');
  const { isLogin } = value;

  const onLoginSuccess = (data: AxiosResponse) => {
    setValue({ isLogin: true, loginToken: data.headers['access-token'] });
  };

  const onLoginFail = () => {
    loginDispatch({ type: 'reset' });
  };

  const { mutate } = useMutationPost(
    URL,
    { email: id, password },
    { onSuccessCallback: onLoginSuccess, onErrorCallback: onLoginFail },
  );

  const idValidate = onChangeInput(idDispatch);
  const passwordValidate = onChangeInput(passwordDipatch);

  const onClickLogin = () => {
    mutate();
  };

  const onClickSignin = () => {
    routeToPassword();
  };

  const loginFormProps = {
    idValidate,
    passwordValidate,
    idValue: id,
    passwordValue: password,
    ID,
    PASSWORD,
    idErrorMessages,
    passwordErrorMessages,
  };

  const panelProps = { onClickLogin, onClickSignin };

  return (
    <Content>
      {isLogin && <Navigate to="/Main" />}
      <LoginLogo />
      <UserIdentifyForm {...loginFormProps} />
      <LoginPanel {...panelProps} />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;
