/* eslint-disable react/no-unused-prop-types */
import { ReactNode, forwardRef, Ref } from 'react';
import styled, { CSSProperties } from 'styled-components';

export type ContainerProps<T extends RegionalElements> = {
  children?: ReactNode;
  as?: T;
  layout?: Layout;
  justifyContent?: FlexLayout;
  alignItem?: FlexLayout;
  flexWrap?: Wrap;
  backgroundColor?: CSSProperties['backgroundColor'];
  gap?: CSSProperties['gap'];
};

type RegionalElements =
  | 'div'
  | 'section'
  | 'article'
  | 'header'
  | 'main'
  | 'footer'
  | 'aside';

type Layout = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type FlexLayout =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

type Wrap = 'wrap' | 'nowrap';

export const DEFAULT_CONTAINER_PARAMS: Pick<ContainerProps<'div'>, 'as'> = {
  as: 'div',
};

// TODO: Ref에 여러 HTML엘리먼트 타입이 경우에 따라 들어가야하는데...
// div, span 처럼 as의 값이 추론되어서 해당HTMLElement 타입을 반환해주는 타입이 없을까
function Container<T extends RegionalElements = 'div'>(
  props: ContainerProps<T>,
  ref: Ref<any>,
) {
  const containerProperty = {
    ...DEFAULT_CONTAINER_PARAMS,
    ...props,
  };

  const { children } = containerProperty;

  return (
    <StyledContainer {...containerProperty} ref={ref}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div<ContainerProps<RegionalElements>>(
  ({ layout, justifyContent, alignItem, flexWrap, backgroundColor, gap }) => ({
    display: 'flex',
    flexDirection: layout,
    justifyContent,
    alignItem,
    flexWrap,
    backgroundColor,
    gap,
  }),
);

const ForWardedContainer = forwardRef(Container);

export { ForWardedContainer as Container };
