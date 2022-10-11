import { AxiosResponse } from 'axios';
import {
  useState,
  Dispatch,
  ChangeEvent,
  ElementType,
  useReducer,
} from 'react';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import {
  CautionMessage,
  CautionContent,
} from '@/components/common/Caution/types';
import { UserInput, UserInputProps } from '@/components/common/Input/User';
import { Logo } from '@/components/common/Logo';
import { NavText } from '@/components/common/Text/Navigation';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { useMutationPost } from '@/hooks/useMutationPost';
import { idValid, passwordValid } from '@/service/login';
import {
  getIdAction,
  getLoginDispatch,
  getPasswordAction,
} from '@/templates/LoginForm/Actions';
import {
  DEFAULT_LOGIN_STATE,
  loginReducer,
} from '@/templates/LoginForm/Reducer';

const onChangeInput =
  (dispatch: Dispatch<string>) => (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    dispatch(value);
  };

const ID = '아이디';
const PASSWORD = '비밀번호';
const URL = `${process.env.LOG_IN}`;

type LoginFormProps = {
  NeedSignInDispatch: () => void;
};

export function LoginForm({ NeedSignInDispatch }: LoginFormProps) {
  const [loginState, loginDispatch] = useReducer(
    loginReducer,
    DEFAULT_LOGIN_STATE,
  );

  const { value, setValue } = useLocalStorage('loginState');
  const { isLogin } = value;

  const { id, password } = loginState;

  const onLoginSuccess = (data: AxiosResponse) => {
    setValue({ isLogin: true, loginToken: data.headers['access-token'] });
  };

  const onLoginFail = () => {
    loginDispatch({ type: 'reset' });
  };

  const { mutate } = useMutationPost(
    URL,
    { email: id, password },
    onLoginSuccess,
    onLoginFail,
  );

  const idDispatch = getLoginDispatch(loginDispatch, getIdAction);
  const passwordDipatch = getLoginDispatch(loginDispatch, getPasswordAction);

  const idErrorMessages = idValid(id);
  const passwordErrorMessages = passwordValid(password);

  const idValidate = onChangeInput(idDispatch);
  const passwordValidate = onChangeInput(passwordDipatch);

  return (
    <Content>
      {isLogin && <Navigate to="/Main" />}
      <LogoLayout>
        <Logo size="small" destination="/" />
      </LogoLayout>
      <LoginInput
        inputProps={{
          size: 'large',
          iconSrc: 'PERSON',
          placeholder: '아이디를 입력하세요',
          onChange: idValidate,
          value: id,
        }}
        cautionContent={ID}
        inputErrorMessages={idErrorMessages}
        key={ID}
      />
      <LoginInput
        inputProps={{
          size: 'large',
          iconSrc: 'LOCK',
          placeholder: '비밀번호를 입력하세요',
          onChange: passwordValidate,
          value: password,
        }}
        cautionContent={PASSWORD}
        inputErrorMessages={passwordErrorMessages}
        key={PASSWORD}
      />
      <NavText linkPath="/" size="small">
        아이디/비밀번호를 잊어버렸나요?
      </NavText>
      <Button
        onClick={() => {
          mutate();
        }}
      >
        <Text>로그인</Text>
      </Button>
      <Line />
      <Text styles={{ cursor: 'pointer' }} onClick={NeedSignInDispatch}>
        회원가입
      </Text>
    </Content>
  );
}

function LoginInput<incomeElements extends ElementType = 'input'>({
  inputProps,
  cautionContent,
  inputErrorMessages,
}: {
  inputProps: UserInputProps<incomeElements>;
  cautionContent?: CautionContent;
  inputErrorMessages: (CautionMessage | false)[];
}) {
  const [isInputBlur, setIsInputBlur] = useState(false);
  const onFocusInput = () => {
    setIsInputBlur(false);
  };

  const onBlurInput = () => {
    setIsInputBlur(true);
  };

  const inputCaution = inputErrorMessages.map(
    inputError =>
      isInputBlur &&
      inputError && <Caution content={cautionContent} message={inputError} />,
  );

  return (
    <>
      <UserInput {...inputProps} onFocus={onFocusInput} onBlur={onBlurInput} />
      {inputCaution}
    </>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Line = styled.div`
  width: 200px;
  height: 1px;
  background-color: ${({ theme }) => theme.pallete.grey3};
`;

const LogoLayout = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 60px;
`;