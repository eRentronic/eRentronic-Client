import { Icon } from '@/components/common';
import { IconTypes } from '@/components/common/Icon/types';
import { Logo } from '@/components/common/Logo';
import { defaultPopUpOpenState } from '@/recoils/popUp/popUp';

import * as S from './index.styles';
import { PopUp } from './PopUp';

const USER_ICON_LIST: IconTypes[] = ['MENU', 'SHOPPING_CART', 'PERSON'];
const NAV_DATA_LIST: {
  title: string;
  options: string[];
  id: keyof typeof defaultPopUpOpenState;
}[] = [
  { title: '페이지', options: ['홈', '메인'], id: 0 },
  {
    title: 'QnA',
    options: ['고객 안내', '자주 묻는 질문', '1대1 고객상담'],
    id: 1,
  },
];

const UserIcons = USER_ICON_LIST.map(icon => (
  <Icon iconSrc={icon} key={icon} />
));

const NAV_CONTENTS = NAV_DATA_LIST.map(({ title, options, id }) => (
  <PopUp title={title} options={options} id={id} key={id} />
));

export function Header() {
  return (
    <S.Layout>
      <Logo size="small" destination="/" />
      <S.ContentsLayOut>
        <S.NavLeft>{NAV_CONTENTS}</S.NavLeft>
        <S.NavRight>{UserIcons}</S.NavRight>
      </S.ContentsLayOut>
    </S.Layout>
  );
}
