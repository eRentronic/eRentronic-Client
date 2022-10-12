/* eslint-disable react/no-unused-prop-types */
import { ReactNode, forwardRef, Ref } from 'react';
import styled, { CSSProperties } from 'styled-components';

type ContainerProps<T extends RegionalElements> = {
  children?: ReactNode;
  as?: T;
  layout?: Layout;
  justifyContents?: FlexLayout;
  alignItems?: FlexLayout;
  flexWrap?: Wrap;
  color?: CSSProperties['color'];
};

type RegionalElements =
  | 'div'
  | 'section'
  | 'article'
  | 'header'
  | 'main'
  | 'footer'
  | 'aside';

type Layout = 'row' | 'column';

type FlexLayout =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around';

type Wrap = 'wrap' | 'nowrap';

const DEFAULT_CONTAINER_PARAMS: Pick<
  ContainerProps<'div'>,
  'layout' | 'justifyContents' | 'alignItems' | 'flexWrap' | 'color' | 'as'
> = {
  layout: 'row',
  justifyContents: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  color: 'transparent',
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
  ({ layout, justifyContents, alignItems, flexWrap, color }) => ({
    display: 'flex',
    flexDirection: layout,
    justifyContents,
    alignItems,
    flexWrap,
    color,
  }),
);

const ForWardedContainer = forwardRef(Container);

export { ForWardedContainer as Container };
