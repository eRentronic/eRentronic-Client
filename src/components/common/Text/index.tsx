import { forwardRef, Ref, ElementType } from 'react';

import { StyledText } from './style';
import { TextProps } from './types';

const Text = <incomeElementType extends ElementType = 'span'>(
  { typography, className, as, color, ...props }: TextProps<incomeElementType>,
  ref: Ref<any>,
) => {
  const incomeElement = as ?? 'span';

  return (
    <StyledText
      ref={ref}
      as={incomeElement}
      className={className}
      typography={typography}
      color={color}
    >
      {props.children}
    </StyledText>
  );
};

const ForwardedText = forwardRef(Text);

export { ForwardedText as Text };
