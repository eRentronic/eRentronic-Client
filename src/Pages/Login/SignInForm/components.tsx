import { ElementType, useState, ChangeEvent } from 'react';
import styled from 'styled-components';

import { Button, Text } from '@/components/common';
import { UserInput, UserInputProps } from '@/components/common/Input/User';
import { Caution } from '@/components/common/Text/Caution';
import {
  CautionMessage,
  CautionContent,
} from '@/components/common/Text/Caution/types';
import { DefaultAddressState } from '@/hooks/useAddressApi';

export function SignInInput<incomeElements extends ElementType = 'input'>({
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
    <SignInInputLayout>
      <UserInput {...inputProps} onFocus={onFocusInput} onBlur={onBlurInput} />
      {inputCaution}
    </SignInInputLayout>
  );
}

type SingInpanelProps = {
  onClickSignIn: () => void;
  onClickLoginRouteButton: () => void;
  isSignInFilled: boolean;
  isAddressFilled: boolean;
  hasWrongInput: boolean;
};

export function Panel({
  onClickSignIn,
  onClickLoginRouteButton,
  isSignInFilled,
  isAddressFilled,
  hasWrongInput,
}: SingInpanelProps) {
  return (
    <BtnLayout>
      <Button
        onClick={onClickSignIn}
        disabled={isSignInFilled || isAddressFilled || hasWrongInput}
      >
        <Text>회원 가입 완료</Text>
      </Button>
      <Button onClick={onClickLoginRouteButton}>
        <Text>로그인 페이지 이동</Text>
      </Button>
    </BtnLayout>
  );
}

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
  );
}

type EmailFormProps = {
  ID: '아이디' | '비밀번호' | '주소';
  onChangeID: (e: ChangeEvent<HTMLInputElement>) => void;
  idErrorMessages: (false | CautionMessage)[];
};

export function EmailForm({ ID, onChangeID, idErrorMessages }: EmailFormProps) {
  return (
    <EmailWrap>
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
    </EmailWrap>
  );
}

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

type AddressFormProps = {
  address: DefaultAddressState;
  addressControll: () => void;
  onChageAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
};

export function AddressForm({
  address,
  addressControll,
  onChageAddressDetail,
}: AddressFormProps) {
  const { address1, address2, zipCode } = address;
  return (
    <>
      <UserInput
        size="large"
        placeholder="주소"
        onClick={addressControll}
        value={address1}
        style={{ caretColor: 'transparent' }}
      />
      <UserInput
        size="large"
        placeholder="상세주소"
        onChange={onChageAddressDetail}
        value={address2}
      />
      <UserInput size="small" placeholder="우편번호" value={zipCode} disabled />
    </>
  );
}

const SignInLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

const EmailWrap = styled.div`
  display: flex;
  gap: 15px;
`;

const SignInInputLayout = styled(SignInLayout)`
  align-items: flex-end;
  gap: 5px;
`;

const PasswordsLayout = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;

const BtnLayout = styled(PasswordsLayout)`
  margin-top: 40px;
  justify-content: center;
`;

const PasswordWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
