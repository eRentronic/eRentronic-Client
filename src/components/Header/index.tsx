import styled from 'styled-components';

import { Icon } from '@/components/common/Icon';
import { IconTypes } from '@/components/common/Icon/types';
import { Text } from '@/components/common/Text';

const USER_ICON_LIST: IconTypes[] = ['MENU', 'SHOPPING_CART', 'PERSON'];
const UserIcons = USER_ICON_LIST.map(icon => <Icon iconSrc={icon} />);

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
        <NavRight>{UserIcons}</NavRight>
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
