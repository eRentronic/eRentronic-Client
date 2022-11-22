import { forwardRef, Ref, ElementType } from 'react';

import { StyledInput } from './style';
import { InputProps } from './types';

function Input<incomElementType extends ElementType = 'input'>(
  {
    fontSize,
    as,
    padding,
    onChangeHandler,
    type,
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
      type={type}
    />
  );
}

const forwardedInput = forwardRef(Input);

export { forwardedInput as Input };
