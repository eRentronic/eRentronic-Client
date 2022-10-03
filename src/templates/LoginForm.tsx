import { useState, Dispatch, ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button, Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import { CautionMessage } from '@/components/common/Caution/types';
import { NavText } from '@/components/common/Text/Navigation';
import { UserInput } from '@/components/common/UserInput';
import { useMutationPost } from '@/hooks/useMutationPost';
import { idValid, passwordValid, nameValid } from '@/service/login';

const onChangeInput =
  (setterFunc: Dispatch<string>) => (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;

    setterFunc(value);
  };

const onToggleInput =
  (isFocus: boolean, setterFunc: Dispatch<boolean>) => () => {
    setterFunc(isFocus);
  };

const checkLoginInfo = (
  validID: CautionMessage | false,
  validPassword: CautionMessage | false,
) => !!(validID && validPassword);

const ID = '아이디';
const PASSWORD = '비밀번호';

const URL = `${process.env.LOG_IN}`;

export function LoginForm() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isIdBlur, setIsIdBlur] = useState(false);
  const [isPasswordBlur, setIsPasswordBlur] = useState(false);
  const { mutate } = useMutationPost(URL, { email: id, password });

  const idErrorMessages = idValid(id);
  const passwordErrorMessages = passwordValid(password);

  const idValidate = onChangeInput(setId);
  const onFocusID = onToggleInput(false, setIsIdBlur);
  const onBlurID = onToggleInput(true, setIsIdBlur);

  const passwordValidate = onChangeInput(setPassword);
  const onFocusPassword = onToggleInput(false, setIsPasswordBlur);
  const onBlurPassword = onToggleInput(true, setIsPasswordBlur);

  const idCaution = idErrorMessages.map(
    idError =>
      isIdBlur && idError && <Caution content={ID} message={idError} />,
  );

  const passwordCaution = passwordErrorMessages.map(
    passwordError =>
      isPasswordBlur &&
      passwordError && <Caution content={PASSWORD} message={passwordError} />,
  );

  // const onSuccessLogin = data => {
  //   // setterFn(data); useLocalStorage setter함수 사용하면 됨
  //   navigate('/');
  // };

  return (
    <Content>
      <UserInput
        size="large"
        iconSrc="PERSON"
        placeholder="아이디를 입력하세요"
        onChange={idValidate}
        onBlur={onBlurID}
        onFocus={onFocusID}
      />
      {idCaution}
      <UserInput
        size="large"
        iconSrc="LOCK"
        placeholder="비밀번호를 입력하세요"
        onChange={passwordValidate}
        onBlur={onBlurPassword}
        onFocus={onFocusPassword}
      />
      {passwordCaution}
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
      <NavText linkPath="/" size="medium">
        회원가입
      </NavText>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 110px;
`;

const Line = styled.div`
  width: 200px;
  height: 1px;
  background-color: ${({ theme }) => theme.pallete.grey3};
`;
