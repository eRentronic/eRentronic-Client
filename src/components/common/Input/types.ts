import { ElementType, ChangeEventHandler, HTMLInputTypeAttribute } from 'react';

import { OverRidableProps } from '@/utils/helperType';

type InputBaseProps = {
  fontSize: string;
  padding: number;
  type: HTMLInputTypeAttribute;
  onChangeHandler: ChangeEventHandler;
};

export type InputProps<incomeElementType extends ElementType> =
  OverRidableProps<incomeElementType, InputBaseProps>;
