import { Icon } from '@/components/common';
import { IconTypes } from '@/components/common/Icon/types';

import * as S from './header.styles';
import { PopUp } from './Popup';

const USER_ICON_LIST: IconTypes[] = ['MENU', 'SHOPPING_CART', 'PERSON'];

const UserIcons = USER_ICON_LIST.map(icon => (
  <Icon iconSrc={icon} key={icon} />
));

const NAV_DATA_LIST: { title: string; options: string[] }[] = [
  { title: '페이지', options: ['홈', '메인'] },
  { title: 'QnA', options: ['고객 안내', '자주 묻는 질문', '1대1 고객상담'] },
];

const NAV_CONTENTS = NAV_DATA_LIST.map(({ title, options }) => (
  <PopUp title={title} options={options} />
));

export function Header() {
  return (
    <S.Layout>
      <S.Logo>eRentronic</S.Logo>
      <S.ContentsLayOut>
        <S.NavLeft>{NAV_CONTENTS}</S.NavLeft>
        <S.NavRight>{UserIcons}</S.NavRight>
      </S.ContentsLayOut>
    </S.Layout>
  );
}
