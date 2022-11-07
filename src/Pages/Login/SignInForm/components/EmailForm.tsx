import { ChangeEvent } from 'react';

import { Button, Text } from '@/components/common';
import { Container } from '@/components/common/Layout/Core/Core';
import { CautionMessage } from '@/components/common/Text/Caution/types';
import { SignInInput } from '@/Pages/Login/SignInForm/components/SinginInput';

type EmailFormProps = {
  ID: '아이디' | '비밀번호' | '주소';
  onChangeID: (e: ChangeEvent<HTMLInputElement>) => void;
  idErrorMessages: (false | CautionMessage)[];
};

export function EmailForm({ ID, onChangeID, idErrorMessages }: EmailFormProps) {
  return (
    <Container gap={15}>
      <SignInInput
        inputProps={{
          size: 'medium',
          iconSrc: 'PERSON',
          placeholder: ID,
          onChange: onChangeID,
        }}
        cautionContent={ID}
        inputErrorMessages={idErrorMessages}
      />
      <Button size="small">
        <Text>중복 확인</Text>
      </Button>
    </Container>
  );
}
