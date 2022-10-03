import styled from 'styled-components';

import { Logo } from '@/components/common/Logo';
import { LoginForm } from '@/templates/LoginForm';

export function LoginPage() {
  return (
    <Layout>
      <LoginSection>
        <Logo destination="/" size="small" />
        <LoginForm />
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

const Introduce = styled.section`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.pallete.primary};
`;
