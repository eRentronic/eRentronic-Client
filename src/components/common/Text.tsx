import { forwardRef, Ref, ElementType } from 'react';

import { OverRidableProps } from '@/utils/helperType';
// 추상화 하며 느낀점은 공통으로 들어갈만한 로직을 계속 확장해나가며 중복을 줄인느낌
type TextBaseProps = {
  typography?: string;
};

type TextProps<incomeElement extends ElementType> = OverRidableProps<
  incomeElement,
  TextBaseProps
>;

// TODO: 글씨체 관련 코드 작성, 정리
const Text = <incomeElement extends ElementType = 'span'>(
  { typography = 'default', ...props }: TextProps<incomeElement>,
  ref: Ref<any>,
) => {
  return <span ref={ref}>{props.children}</span>;
};

const ForwardedText = forwardRef(Text);

export { ForwardedText as Text };
