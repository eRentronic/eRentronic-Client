import { forwardRef, Ref, ElementType } from 'react';
import styled from 'styled-components';

import { TextProps } from './types';

// TODO: 글씨체 관련 코드 작성, 정리
const Text = <incomeElementType extends ElementType = 'span'>(
  { typography = 'default', as, ...props }: TextProps<incomeElementType>,
  ref: Ref<any>,
) => {
  const incomeElement = as ?? 'span';

  return (
    <StyledText ref={ref} as={incomeElement}>
      {props.children}
    </StyledText>
  );
};

const StyledText = styled.span``;

const ForwardedText = forwardRef(Text);

export { ForwardedText as Text };
