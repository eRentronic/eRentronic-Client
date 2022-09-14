import { useState } from 'react';

import { Text } from '@/components/common';

import * as S from './popUp.style';
import * as Types from './popUp.types';

export function PopUp({ title, options }: Types.PopUpProps) {
  const [isOpen, setIsOpen] = useState(false);

  const MenuList = options.map(option => <Text as="li">{option}</Text>);
  window.addEventListener('click', () => {
    if (!isOpen) {
      return;
    }
    setIsOpen(false);
  });
  return (
    <S.Select
      onClick={e => {
        e.stopPropagation();
      }}
    >
      <Text
        onClick={() => {
          setIsOpen(true);
        }}
      >
        {title}
      </Text>
      <S.Menu isVisible={isOpen}>{MenuList}</S.Menu>
    </S.Select>
  );
}
