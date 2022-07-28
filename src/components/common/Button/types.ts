import { ElementType } from 'react';

import { OverRidableProps } from '@/utils/helperType';

export type ButtonBaseProps = {
  onClickHandler?: React.MouseEventHandler;
};

export type ButtonProps<incomeElement extends ElementType> = OverRidableProps<
  incomeElement,
  ButtonBaseProps
>;
