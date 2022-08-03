import { useState } from 'react';

import * as S from './popUp.style';
import * as Types from './popUp.types';

import { Text } from '../common/Text';

export function PopUp({ title, options }: Types.LinkProps) {
  const [isClicked, setClicked] = useState(false);

  const MenuList = options.map(option => <Text as="li">{option}</Text>);
  return (
    <S.Select
      onClick={() => {
        setClicked(!isClicked);
      }}
    >
      <Text>{title}</Text>
      <S.Menu isVisible={isClicked}>{MenuList}</S.Menu>
    </S.Select>
  );
}
