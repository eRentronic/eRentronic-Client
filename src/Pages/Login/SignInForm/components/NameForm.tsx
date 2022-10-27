import { ChangeEvent } from 'react';

import { CautionMessage } from '@/components/common/Text/Caution/types';
import { SignInInput } from '@/Pages/Login/SignInForm/components/SinginInput';

type NameFormProps = {
  onChangeName: (e: ChangeEvent<HTMLInputElement>) => void;
  nameErrorMessges: (false | CautionMessage)[];
};

export function NameForm({ onChangeName, nameErrorMessges }: NameFormProps) {
  return (
    <SignInInput
      inputProps={{
        size: 'small',
        placeholder: '이름',
        onChange: onChangeName,
      }}
      inputErrorMessages={nameErrorMessges}
    />
  );
}
