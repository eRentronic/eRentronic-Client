import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Text, Button } from '@/components/common';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { LoginForm } from '@/templates/LoginForm';
import { SignInForm } from '@/templates/SigninForm';

export function LoginPage() {
  const navigate = useNavigate();
  const [isDone, setIsDone] = useState(false);
  const [message, setMessage] = useState('');
  const [needSignIn, setNeedSignIn] = useState(false);
  const { value } = useLocalStorage('loginState', {
    isLogin: false,
    loginToken: '',
  });
  const { isLogin } = value;

  const routeToAnotherForm = () => {
    setNeedSignIn(!needSignIn);
  };

  useEffect(() => {
    if (isLogin) navigate('/main');
  }, [value]);

  return (
    <Layout>
      <LoginSection routeToSignIn={needSignIn}>
        <LoginForm NeedSignInDispatch={routeToAnotherForm} />
        <SignInForm
          messageDispatch={setMessage}
          modalDisplayDispatch={setIsDone}
          NeedSignInDispatch={routeToAnotherForm}
        />
      </LoginSection>

      <Introduce />
      <AlertModal isDone={isDone}>
        <Text>{message}메시지 들어감</Text>
        <Button
          size="medium"
          onClick={() => {
            setIsDone(false);
          }}
        >
          모달창 닫기
        </Button>
      </AlertModal>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const LoginSection = styled.section<{ routeToSignIn: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 210px 150px;
  height: 200vh;
  box-sizing: border-box;
  transform: translateY(${({ routeToSignIn }) => (routeToSignIn ? '-50%' : 0)});
  transition: 0.5s;
`;

const Introduce = styled.section`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.pallete.primary};
`;

const AlertModal = styled.div<{ isDone: boolean }>`
  position: fixed;
  display: ${({ isDone }) => (isDone ? 'flex' : 'none')};
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  justify-content: space-around;
  transform: translate(-50%, -50%);
  top: 30%;
  left: 50%;
  width: 250px;
  height: 150px;
  background: ${({ theme }) => theme.pallete.normalBg};
`;
