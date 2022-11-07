import { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Container } from '@/components/common/Layout/Core';
import { CautionMessage } from '@/components/common/Text/Caution/types';
import { SignInInput } from '@/Pages/Login/SignInForm/components/SinginInput';

type PasswordFormProps = {
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  confirmPasswordErrorMessages: (false | CautionMessage)[];
  PASSWORD: '아이디' | '비밀번호' | '주소';
  passwordErrorMessages: (false | CautionMessage)[];
  onChangeConfirmPassword: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function PasswordForm({
  onChangePassword,
  confirmPasswordErrorMessages,
  PASSWORD,
  passwordErrorMessages,
  onChangeConfirmPassword,
}: PasswordFormProps) {
  return (
    <PasswordsLayout gap={10}>
      <Container flexDirection="column" alignItem="flex-end">
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
      </Container>
      <Container flexDirection="column" alignItem="flex-end">
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
      </Container>
    </PasswordsLayout>
  );
}

const PasswordsLayout = styled(Container)`
  width: 100%;
`;
