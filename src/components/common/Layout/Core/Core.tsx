/* eslint-disable react/no-unused-prop-types */
import { ReactNode, forwardRef, Ref } from 'react';
import styled, { CSSObject, CSSProperties } from 'styled-components';

export type ContainerProps<T extends RegionalElements> = {
  children?: ReactNode;
  as?: T;
  flexDirection?: Layout;
  justifyContent?: FlexLayout;
  alignItems?: FlexLayout;
  flexWrap?: Wrap;
  backgroundColor?: CSSProperties['backgroundColor'];
  onClick?: React.MouseEventHandler;
  gap?: CSSProperties['gap'];
  styles?: CSSObject;
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
    alignItems,
    flexWrap,
    backgroundColor,
    gap,
    onClick,
    styles,
  }) => ({
    display: 'flex',
    flexDirection,
    justifyContent,
    alignItems,
    flexWrap,
    backgroundColor,
    gap,
    boxSizing: 'border-box',
    cursor: onClick ? 'pointer' : undefined,
    ...styles,
  }),
);

const ForWardedContainer = forwardRef(Container);

export { ForWardedContainer as Container };
