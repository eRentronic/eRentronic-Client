import { ElementType } from 'react';

import { OverRidableProps } from '@/utils/helperType';

export type ButtonBaseProps = {
  className?: string;
};

export type ButtonProps<incomeElement extends ElementType> = OverRidableProps<
  incomeElement,
  ButtonBaseProps
>;
