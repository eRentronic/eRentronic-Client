import { useState } from 'react';
import styled from 'styled-components';

import { Button, Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import { Logo } from '@/components/common/Logo';
import { NavText } from '@/components/common/Navigation-text';
import { UserInput } from '@/components/common/UserInput';

export const isIdValid = (idInput: string) => {
  return idInput.length <= 8 ? false : !(idInput.length > 20);
};

export const isPasswordValid = (passwordInput: string) => {
  return !(passwordInput.length <= 10);
};

const checkLoginInfo = (id: string, password: string) =>
  if(!isIdValid(id)){
    console.log('잘못된 아이디 입니다')}
  else if(!isPasswordValid(password)){
    console.log('잘못된 비밀번호 입니다')}
    else{ console.log('적합한 로그인 정보임')};

export function LoginPage() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  // 로컬스토리지를 통해서 이전 로그인 확인

  return (
    <Layout>
      <LoginSection>
        <Logo destination="/" size="small" />
        <Content>
          <UserInput
            size="large"
            iconSrc="PERSON"
            placeholder="아이디를 입력하세요"
            onChange={e => {
              setId(e.target.value);
            }}
          />
          <UserInput
            size="large"
            iconSrc="LOCK"
            placeholder="비밀번호를 입력하세요"
            onChange={e => {
              setPassword(e.target.value);
            }}
          />
          <NavText linkPath="/" size="small">
            아이디/비밀번호를 잊어버렸나요?
          </NavText>
          <Button
            onClick={e => {
              checkLoginInfo(id, password);
            }}
          >
            <Text>로그인</Text>
          </Button>
          <Line />
          <NavText linkPath="/" size="medium">
            회원가입
          </NavText>
        </Content>
      </LoginSection>
      <Introduce />
    </Layout>
  );
}

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

const LoginSection = styled.section`
  width: 50%;
  padding: 210px 150px;
  box-sizing: border-box;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 110px;
`;

const Introduce = styled.section`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.pallete.primary};
`;

const Line = styled.div`
  width: 200px;
  height: 1px;
  background-color: ${({ theme }) => theme.pallete.grey3};
`;
