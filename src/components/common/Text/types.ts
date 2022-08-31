import { ElementType, MouseEventHandler } from 'react';

import { lightMode } from '@/styles/globalTheme';
import { OverRidableProps } from '@/utils/helperType';

// 추상화 하며 느낀점은 공통으로 들어갈만한 로직을 계속 확장해나가며 중복을 줄인느낌

export type TextBaseProps = {
  typography?: keyof typeof lightMode.typography;
  color?: keyof typeof lightMode.pallete;
  className?: string;
  onClick: MouseEventHandler;
};

export type TextProps<incomeElementType extends ElementType> = OverRidableProps<
  incomeElementType,
  TextBaseProps
>;

export type StyledTextProps = {
  typography?: keyof typeof lightMode.typography;
  color?: keyof typeof lightMode.pallete;
};
