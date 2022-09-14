import { useNavigate } from 'react-router-dom';

import { Icon } from '@/components/common';
import { IconTypes } from '@/components/common/Icon/types';
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
  <PopUp title={title} options={options} id={id} />
));

export function Header() {
  const navigate = useNavigate();

  const onClickLogo = () => {
    navigate('/');
  };

  return (
    <S.Layout onClick={onClickLogo}>
      <S.Logo>eRentronic</S.Logo>
      <S.ContentsLayOut>
        <S.NavLeft>{NAV_CONTENTS}</S.NavLeft>
        <S.NavRight>{UserIcons}</S.NavRight>
      </S.ContentsLayOut>
    </S.Layout>
  );
}
