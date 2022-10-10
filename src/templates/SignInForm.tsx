import {
  useState,
  Dispatch,
  ChangeEvent,
  ElementType,
  useReducer,
} from 'react';
import styled from 'styled-components';

import { Button, Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import {
  CautionMessage,
  CautionContent,
} from '@/components/common/Caution/types';
import { UserInput, UserInputProps } from '@/components/common/Input/User';
import { Logo } from '@/components/common/Logo';
import { useAddressApi, DefaultAddressState } from '@/hooks/useAddressApi';
import { useMutationPost } from '@/hooks/useMutationPost';
import {
  idValid,
  nameValid,
  signInPasswordValid,
  confirmPasswordValid,
} from '@/service/login';

const onChangeInput =
  (setterFunc: Dispatch<string>) => (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setterFunc(value);
  };

const ID = '아이디';
const PASSWORD = '비밀번호';
const URL = `${process.env.SIGN_IN}`;

const DEFAULT_SIGNIN_STATE = {
  email: '',
  password: '',
  passwordConfirm: '',
  name: '',
};

type Action = {
  type: string;
  payload: string;
};

type SigninResponse = {
  message: string;
  error: unknown;
};

const getSignInDispatch =
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

const getEmailAction = (value: string) => ({
  type: 'setEmail',
  payload: value,
});
const getPasswordAction = (value: string) => ({
  type: 'setPassword',
  payload: value,
});
const getPasswordConfirmAction = (value: string) => ({
  type: 'setPasswordConfirm',
  payload: value,
});
const getNameAction = (value: string) => ({ type: 'setName', payload: value });
const signInReducer = (
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

const getSignInForm = (
  address: DefaultAddressState,
  signInState: typeof DEFAULT_SIGNIN_STATE,
) => ({
  address: { ...address, fulladdress: address.address1 + address.address2 },
  ...signInState,
});

type SignInProps = {
  messageDispatch: Dispatch<string>;
  modalDisplayDispatch: Dispatch<boolean>;
  NeedSignInDispatch: () => void;
};

export function SignInForm({
  messageDispatch,
  modalDisplayDispatch,
  NeedSignInDispatch,
}: SignInProps) {
  const { addressControll, address, setDetailAddress } = useAddressApi();
  const [signInState, signInDispatch] = useReducer(
    signInReducer,
    DEFAULT_SIGNIN_STATE,
  );

  const { email, password, passwordConfirm, name } = signInState;

  const signInData = getSignInForm(address, signInState);
  const onSignInFail = (res: SigninResponse) => {
    modalDisplayDispatch(true);
    messageDispatch(res.message);
  };
  const onSignInSuccess = () => {
    signInDispatch({ type: 'reset' });
    NeedSignInDispatch();

    // 스크롤 위로 가는 로직
  };
  const { mutate } = useMutationPost(
    URL,
    signInData,
    onSignInSuccess,
    onSignInFail,
  );

  const eMailDispatch = getSignInDispatch(signInDispatch, getEmailAction);
  const passwordDispatch = getSignInDispatch(signInDispatch, getPasswordAction);
  const passwordConfirmDispatch = getSignInDispatch(
    signInDispatch,
    getPasswordConfirmAction,
  );
  const nameDispatch = getSignInDispatch(signInDispatch, getNameAction);

  const idErrorMessages = idValid(email);
  const passwordErrorMessages = signInPasswordValid(password);
  const nameErrorMessges = nameValid(name);
  const confirmPasswordErrorMessages = confirmPasswordValid({
    first: password,
    second: passwordConfirm,
  });

  const onChangeID = onChangeInput(eMailDispatch);
  const onChangePassword = onChangeInput(passwordDispatch);
  const onChangeConfirmPassword = onChangeInput(passwordConfirmDispatch);
  const onChangeName = onChangeInput(nameDispatch);
  const onChageAddressDetail = onChangeInput(setDetailAddress);
  const onClickSignIn = () => {
    NeedSignInDispatch();
    mutate();
  };

  const signInKeys = Object.keys(signInState) as Array<
    keyof typeof signInState
  >;
  const addressKeys = Object.keys(address) as Array<keyof typeof address>;
  const isSignInFilled = !!signInKeys.find(key => !signInState[key]);
  const isAddressFilled = !!addressKeys.find(key => !address[key]);
  // TODO: hasWronInput 리팩토링 가능 위와 묶어서도 가능할까? 고민
  const hasWrongInput =
    !!idErrorMessages.find(value => value) ||
    !!confirmPasswordErrorMessages.find(value => value) ||
    !!passwordErrorMessages.find(value => value) ||
    !!nameErrorMessges.find(value => value);

  return (
    <SignInLayout>
      <Logo size="small" />
      <SignInInput
        inputProps={{
          size: 'large',
          iconSrc: 'PERSON',
          placeholder: ID,
          onChange: onChangeID,
        }}
        cautionContent={ID}
        inputErrorMessages={idErrorMessages}
      />
      <PasswordsLayout>
        <PasswordWrap>
          <SignInInput
            inputProps={{
              size: 'medium',
              placeholder: '비밀번호',
              onChange: onChangePassword,
              iconSrc: 'LOCK',
              type: 'password',
            }}
            cautionContent={PASSWORD}
            inputErrorMessages={passwordErrorMessages}
          />
        </PasswordWrap>
        <PasswordWrap>
          <SignInInput
            inputProps={{
              size: 'medium',
              placeholder: '비밀번호 재입력',
              onChange: onChangeConfirmPassword,
              type: 'password',
            }}
            cautionContent={PASSWORD}
            inputErrorMessages={confirmPasswordErrorMessages}
          />
        </PasswordWrap>
      </PasswordsLayout>
      <SignInInput
        inputProps={{
          size: 'small',
          placeholder: '이름',
          onChange: onChangeName,
        }}
        inputErrorMessages={nameErrorMessges}
      />
      <UserInput
        size="large"
        placeholder="주소"
        onClick={addressControll}
        value={address.address1}
        style={{ caretColor: 'transparent' }}
      />
      <UserInput
        size="large"
        placeholder="상세주소"
        onChange={onChageAddressDetail}
        value={address.address2}
      />
      <UserInput
        size="small"
        placeholder="우편번호"
        value={address.zipCode}
        disabled
      />
      <BtnLayout>
        <Button
          onClick={onClickSignIn}
          disabled={isSignInFilled || isAddressFilled || hasWrongInput}
        >
          <Text>회원 가입 완료</Text>
        </Button>
      </BtnLayout>
    </SignInLayout>
  );
}

function SignInInput<incomeElements extends ElementType = 'input'>({
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

const SignInLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const PasswordsLayout = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const PasswordWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const BtnLayout = styled(PasswordsLayout)`
  margin-top: 40px;
  justify-content: center;
`;
