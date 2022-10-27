import { ChangeEvent } from 'react';

import { CautionMessage } from '@/components/common/Text/Caution/types';
import { LoginInput } from '@/Pages/Login/LoginForm/components/Input';

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
