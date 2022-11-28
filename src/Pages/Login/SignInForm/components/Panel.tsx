import styled from 'styled-components';

import { Button, Text } from '@/components/common';
import { Container } from '@/components/common/Layout/Core/Core';

type SingInpanelProps = {
  onClickSignIn: () => void;
  onClickLoginRouteButton: () => void;
  isSignInFilled: boolean;
  isAddressFilled: boolean;
  hasWrongInput: boolean;
};

export function SignInPanel({
  onClickSignIn,
  onClickLoginRouteButton,
  isSignInFilled,
  isAddressFilled,
  hasWrongInput,
}: SingInpanelProps) {
  return (
    <BtnLayout alignItem="center" justifyContent="center">
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

const BtnLayout = styled(Container)`
  margin-top: 40px;
`;
