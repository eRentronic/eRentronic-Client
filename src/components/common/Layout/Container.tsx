/* eslint-disable react/no-unused-prop-types */
import { ReactNode, forwardRef, Ref } from 'react';
import styled from 'styled-components';

type ContainerProps<T extends RegionalElements> = {
  children: ReactNode;
  as?: T;
  layout?: Layout;
  justifyContents?: FlexLayout;
  alignItems?: FlexLayout;
  flexWrap?: Wrap;
  color?: string;
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
  'layout' | 'justifyContents' | 'alignItems' | 'flexWrap' | 'color'
> = {
  layout: 'row',
  justifyContents: 'flex-start',
  alignItems: 'flex-start',
  flexWrap: 'wrap',
  color: 'transParent',
};

function Container<T extends RegionalElements = 'div'>(
  props: ContainerProps<T>,
  ref: Ref<any>,
) {
  const containerProperty = {
    ...DEFAULT_CONTAINER_PARAMS,
    ...props,
  };

  delete containerProperty.as;

  const { children, as } = containerProperty;

  const target = as ?? 'div';

  return (
    <StyledContainer {...containerProperty} as={target} ref={ref}>
      {children}
    </StyledContainer>
  );
}

const StyledContainer = styled.div<ContainerProps<RegionalElements>>(
  ({ layout, justifyContents, alignItems, flexWrap }) => ({
    display: 'flex',
    flexDirection: layout,
    justifyContents,
    alignItems,
    flexWrap,
  }),
);

const frowardedContainer = forwardRef(Container);

export { frowardedContainer };
