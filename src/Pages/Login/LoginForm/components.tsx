import { ElementType, useState, ChangeEvent } from 'react';
import styled from 'styled-components';

import { Button, Text } from '@/components/common';
import { UserInput, UserInputProps } from '@/components/common/Input/User';
import { Logo } from '@/components/common/Logo';
import { Caution } from '@/components/common/Text/Caution';
import {
  CautionContent,
  CautionMessage,
} from '@/components/common/Text/Caution/types';
import { NavText } from '@/components/common/Text/Navigation';

export function LoginInput<incomeElements extends ElementType = 'input'>({
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

export function LoginLogo() {
  return (
    <LogoLayout>
      <Logo size="small" destination="/" />
    </LogoLayout>
  );
}

type LoginFormProps = {
  idValidate: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordValidate: (e: ChangeEvent<HTMLInputElement>) => void;
  idValue: string;
  passwordValue: string;
  ID: '아이디';
  PASSWORD: '비밀번호';
  idErrorMessages: (CautionMessage | false)[];
  passwordErrorMessages: (CautionMessage | false)[];
};

export function UserIdentifyForm({
  idValidate,
  passwordValidate,
  idValue,
  passwordValue,
  ID,
  PASSWORD,
  idErrorMessages,
  passwordErrorMessages,
}: LoginFormProps) {
  return (
    <>
      <LoginInput
        inputProps={{
          size: 'large',
          iconSrc: 'PERSON',
          placeholder: '아이디를 입력하세요',
          onChange: idValidate,
          value: idValue,
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
          value: passwordValue,
        }}
        cautionContent={PASSWORD}
        inputErrorMessages={passwordErrorMessages}
        key={PASSWORD}
      />
    </>
  );
}

type PanelProps = {
  onClickLogin: () => void;
  onClickSignin: () => void;
};

export function Panel({ onClickLogin, onClickSignin }: PanelProps) {
  return (
    <>
      <NavText linkPath="/" size="small">
        아이디/비밀번호를 잊어버렸나요?
      </NavText>
      <Button onClick={onClickLogin}>
        <Text>로그인</Text>
      </Button>
      <Line />
      <Text styles={{ cursor: 'pointer' }} onClick={onClickSignin}>
        회원가입
      </Text>
    </>
  );
}

const LogoLayout = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 60px;
`;

const Line = styled.div`
  width: 200px;
  height: 1px;
  background-color: ${({ theme }) => theme.pallete.grey3};
`;
