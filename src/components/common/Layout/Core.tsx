/* eslint-disable react/no-unused-prop-types */
import { ReactNode, forwardRef, Ref } from 'react';
import styled, { CSSProperties } from 'styled-components';

export type ContainerProps<T extends RegionalElements> = {
  children?: ReactNode;
  as?: T;
  flexDirection?: Layout;
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
  ({
    flexDirection,
    justifyContent,
    alignItem,
    flexWrap,
    backgroundColor,
    gap,
  }) => ({
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItem,
    flexWrap,
    backgroundColor,
    gap,
    boxSizing: 'border-box',
  }),
);

const ForWardedContainer = forwardRef(Container);

export { ForWardedContainer as Container };
