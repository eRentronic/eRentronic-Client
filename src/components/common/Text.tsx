import { forwardRef, Ref, ElementType, ReactNode } from 'react';
import styled from 'styled-components';

import { OverRidableProps } from '@/utils/helperType';
// 추상화 하며 느낀점은 공통으로 들어갈만한 로직을 계속 확장해나가며 중복을 줄인느낌
type TextBaseProps = {
  typography?: string;
};

type TextProps<incomeElementType extends ElementType> = OverRidableProps<
  incomeElementType,
  TextBaseProps
>;

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
