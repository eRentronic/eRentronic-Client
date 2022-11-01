import styled from 'styled-components';

import { Button, Text } from '@/components/common';
import { NavText } from '@/components/common/Text/Navigation';

type PanelProps = {
  onClickLogin: () => void;
  onClickSignin: () => void;
};

export function LoginPanel({ onClickLogin, onClickSignin }: PanelProps) {
  return (
    <>
      <NavText linkPath="/" size="small">
        아이디/비밀번호를 잊어버렸나요?
      </NavText>
      <Button onClick={onClickLogin}>
        <Text>로그인</Text>
      </Button>
      <Line />
      <Text styles={{ cursor: 'pointer' }} onClick={onClickSignin}>
        회원가입
      </Text>
    </>
  );
}

const Line = styled.div`
  width: 200px;
  height: 1px;
  background-color: ${({ theme }) => theme.pallete.grey3};
`;
