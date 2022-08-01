import { Icon } from '@/components/common/Icon';
import { IconTypes } from '@/components/common/Icon/types';
import { Text } from '@/components/common/Text';

import * as S from './styles';

const USER_ICON_LIST: IconTypes[] = ['MENU', 'SHOPPING_CART', 'PERSON'];
const UserIcons = USER_ICON_LIST.map(icon => <Icon iconSrc={icon} />);

const NAV_TEXT_LIST: string[] = ['홈', '샵', 'QnA'];
const NavList = NAV_TEXT_LIST.map(text => <Text>{text}</Text>);

export function Header() {
  return (
    <S.Layout>
      <S.Logo>eRentronic</S.Logo>
      <S.ContentsLayOut>
        <S.NavLeft>{NavList}</S.NavLeft>
        <S.NavRight>{UserIcons}</S.NavRight>
      </S.ContentsLayOut>
    </S.Layout>
  );
}
