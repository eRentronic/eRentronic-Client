import styled from 'styled-components';

import { Button, Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import { Logo } from '@/components/common/Logo';
import { NavText } from '@/components/common/Navigation-text';
import { UserInput } from '@/components/common/UserInput';

export function LoginPage() {
  return (
    <Layout>
      <LoginSection>
        <Logo size="small" />
        <UserInput iconSrc="PERSON" placeholder="아이디를 입력하세요" />
        <UserInput iconSrc="LOCK" placeholder="비밀번호를 입력하세요" />
        {/* <Caution /> */}
        <Button>
          <Text>로그인</Text>
        </Button>
        ---
        <NavText linkPath="/" size="small">
          회원가입
        </NavText>
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
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Introduce = styled.section`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.pallete.primary};
`;
