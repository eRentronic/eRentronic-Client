import { ElementType } from 'react';

import { globalTheme } from '@/styles/globlaTheme';
import { OverRidableProps } from '@/utils/helperType';
// 추상화 하며 느낀점은 공통으로 들어갈만한 로직을 계속 확장해나가며 중복을 줄인느낌

export type TextBaseProps = {
  typography?: keyof typeof globalTheme.typography;
  color?: keyof typeof globalTheme.typography;
  className?: string;
};

export type TextProps<incomeElementType extends ElementType> = OverRidableProps<
  incomeElementType,
  TextBaseProps
>;

export type StyledTextProps = {
  typography?: keyof typeof globalTheme.typography;
  color?: keyof typeof globalTheme.pallete;
};
