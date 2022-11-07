import { ElementType, forwardRef, Ref } from 'react';

import { StyledButton } from './style';
import { ButtonProps } from './types';

// eslint-disable-next-line spaced-comment
/**
- 버튼 컴포넌트입니다. 테스트입니다.
**/

function Button<imcomeElement extends ElementType = 'button'>(
  { className, size, color, styles, ...props }: ButtonProps<imcomeElement>,
  ref: Ref<any>,
) {
  return (
    <StyledButton
      {...props}
      ref={ref}
      className={className}
      size={size}
      color={color}
      styles={styles}
    >
      {props.children}
    </StyledButton>
  );
}

const forwardedButton = forwardRef(Button);

export { forwardedButton as Button };
