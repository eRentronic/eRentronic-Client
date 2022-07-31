import styled from 'styled-components';

import { Text } from '@/components/common/Text';

export function Header() {
  return (
    <>
      <Logo>eRentronic</Logo>
      <ContentsLayOut>
        <NavLeft>
          <Text>홈</Text>
          <Text>샵</Text>
          <Text>qna</Text>
        </NavLeft>
        <NavRight>
          <Text>유저</Text>
          <Text>유저</Text>
          <Text>유저</Text>
        </NavRight>
      </ContentsLayOut>
    </>
  );
}

const Logo = styled.a`
  font-weight: 900;
  font-size: 40px;
  margin-right: 10px;
`;

const ContentsLayOut = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const NavLeft = styled.div`
  display: flex;
  gap: 10px;
`;

const NavRight = styled.div`
  display: flex;
  gap: 10px;
`;
