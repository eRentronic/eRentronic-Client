import styled from 'styled-components';

import { Logo } from '@/components/common/Logo';

export function LoginLogo() {
  return (
    <LogoLayout>
      <Logo size="small" destination="/" />
    </LogoLayout>
  );
}

const LogoLayout = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 60px;
`;
