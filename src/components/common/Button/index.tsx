import { ElementType, forwardRef, Ref } from 'react';

import { StyledButton } from './style';
import { ButtonProps } from './types';

function Button<imcomeElement extends ElementType>(
  { onClickHandler, as, className, ...props }: ButtonProps<imcomeElement>,
  ref: Ref<any>,
) {
  const IncomeElement = as ?? 'button';

  return (
    <StyledButton
      type="button"
      as={IncomeElement}
      ref={ref}
      onClick={onClickHandler}
      className={className}
    >
      {props.children}
    </StyledButton>
  );
}

const forwardedButton = forwardRef(Button);

export { forwardedButton as Button };
