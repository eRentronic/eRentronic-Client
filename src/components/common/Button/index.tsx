import { ElementType, forwardRef, Ref } from 'react';

import { StyledButton } from './style';
import { ButtonProps } from './types';

function Button<imcomeElement extends ElementType = 'button'>(
  { className, size, color, ...props }: ButtonProps<imcomeElement>,
  ref: Ref<any>,
) {
  return (
    <StyledButton
      {...props}
      ref={ref}
      className={className}
      size={size}
      color={color}
    >
      {props.children}
    </StyledButton>
  );
}

const forwardedButton = forwardRef(Button) as typeof Button;

export { forwardedButton as Button };
