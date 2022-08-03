import React, { ElementType } from 'react';

import { OverRidableProps } from '@/utils/helperType';

type InputBaseProps = {
  fontSize: string;
  padding: number;
  onChangeHandler: React.ChangeEventHandler;
};

export type InputProps<incomeElementType extends ElementType> =
  OverRidableProps<incomeElementType, InputBaseProps>;
