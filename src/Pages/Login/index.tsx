import styled from 'styled-components';

import { Button, Text } from '@/components/common';
import { Caution } from '@/components/common/Caution';
import { Logo } from '@/components/common/Logo';
import { NavText } from '@/components/common/Navigation-text';
import { UserInput } from '@/components/common/UserInput';

export function LoginPage() {
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
          />
          <UserInput
            size="large"
            iconSrc="LOCK"
            placeholder="비밀번호를 입력하세요"
          />
          <NavText linkPath="/" size="small">
            아이디/비밀번호를 잊어버렸나요?
          </NavText>
          <Button>
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
