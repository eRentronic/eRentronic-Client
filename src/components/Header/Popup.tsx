import { useRecoilState } from 'recoil';

import { Text } from '@/components/common';
import { popUpOpenState, defaultPopUpOpenState } from '@/recoils/popUp/popUp';

import * as S from './popUp.style';
import * as Types from './popUp.types';

export function PopUp({ title, options, id }: Types.PopUpProps) {
  const [isOpen, setIsOpen] = useRecoilState(popUpOpenState);

  const MenuList = options.map(option => <Text as="li">{option}</Text>);
  return (
    <S.Select
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <Text
        onClick={() => {
          setIsOpen({ ...defaultPopUpOpenState, [id]: true });
        }}
      >
        {title}
      </Text>
      <S.Menu isVisible={isOpen[id]}>{MenuList}</S.Menu>
    </S.Select>
  );
}
