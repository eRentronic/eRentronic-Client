import { ElementType, useState } from 'react';

import { UserInput, UserInputProps } from '@/components/common/Input/User';
import { Caution } from '@/components/common/Text/Caution';
import {
  CautionContent,
  CautionMessage,
} from '@/components/common/Text/Caution/types';

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
