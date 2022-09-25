import { useState } from 'react';

import { Button, Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import { Logo } from '@/components/common/Logo';
import { NavText } from '@/components/common/Navigation-text';
import { UserInput } from '@/components/common/UserInput';
import { CautionMessage } from '@/components/server/ProductDetail/OrderForm';
import * as S from '@/Pages/Login/Signin.style';

export function SignIn() {
  const [loginErr, setLoginErr] = useState<CautionMessage | ''>('');
  const checkIdInput = (e: React.ChangeEvent) => {
    const { value } = e.target as HTMLInputElement;
    if (value.length <= 8) {
      setLoginErr('tooShort');
    } else if (value.length > 20) {
      setLoginErr('tooLong');
    } else {
      setLoginErr('');
    }
  };
  const ID = '아이디';
  return (
    <S.Layout>
      <S.SignInSection>
        <Logo size="small" />
        <UserInput
          size="large"
          iconSrc="PERSON"
          iconColor="grey4"
          placeholder="아이디"
          onChange={checkIdInput}
        />
        {loginErr && <Caution message={loginErr} content={ID} />}
        <S.PasswordsLayout>
          <UserInput
            size="medium"
            iconSrc="LOCK"
            iconColor="grey4"
            placeholder="비밀번호"
          />
          <UserInput size="medium" placeholder="비밀번호 재입력" />
        </S.PasswordsLayout>

        <UserInput size="small" placeholder="이름" />
        <UserInput size="large" placeholder="주소" />
        <UserInput size="large" placeholder="상세주소" />
        <UserInput size="small" placeholder="우편번호" />

        <S.BtnLayout>
          <Button>
            <Text>회원 가입 완료</Text>
          </Button>
        </S.BtnLayout>
      </S.SignInSection>

      <S.Introduce />
    </S.Layout>
  );
}
