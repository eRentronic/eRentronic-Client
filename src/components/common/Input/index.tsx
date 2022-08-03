import { forwardRef, Ref, ElementType } from 'react';

import { StyledInput } from './style';
import { InputProps } from './types';
// 폰트사이즈 , 패딩, 플레이스 홀더

function Input<incomElementType extends ElementType = 'input'>(
  {
    fontSize,
    as,
    padding,
    onChangeHandler,
    ...props
  }: InputProps<incomElementType>,
  ref: Ref<any>,
) {
  const IncomeElement = as ?? 'input';

  return (
    <StyledInput
      {...props}
      ref={ref}
      as={IncomeElement}
      fontSize={fontSize}
      padding={padding}
      onChange={onChangeHandler}
    />
  );
}

const forwardedInput = forwardRef(Input);

export { forwardedInput as Input };
