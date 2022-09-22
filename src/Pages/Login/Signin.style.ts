import styled from 'styled-components';

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const SignInSection = styled.section`
  width: 50vw;
  padding: 210px 150px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: flex-start;
  gap: 20px;
`;

export const Introduce = styled.section`
  width: 50%;
  height: 100%;
  background-color: ${({ theme }) => theme.pallete.primary};
`;
export const PasswordsLayout = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
`;
export const BtnLayout = styled(PasswordsLayout)`
  margin-top: 40px;
  justify-content: center;
`;
