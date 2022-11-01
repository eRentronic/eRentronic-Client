import { forwardRef } from 'react';
import styled from 'styled-components';

import {
  Container,
  ContainerProps,
  DEFAULT_CONTAINER_PARAMS,
} from '@/components/common/Layout/Core';

type BoxBaseProps = {
  position?: 'static' | 'absolute' | 'relative' | 'fixed';
  left?: number | 'none';
  right?: number | 'none';
  size?: 'small' | 'medium' | 'large';
};

type BoxProps = ContainerProps<'div'> &
  Omit<BoxBaseProps, keyof ContainerProps<'div'>>;

const DEFAULT_PARAM: BoxProps = {
  ...DEFAULT_CONTAINER_PARAMS,
  position: 'static',
  left: 'none',
  right: 'none',
  size: 'medium',
};

const BOX_PADDING = {
  large: '20px',
  medium: '14px',
  small: '8px',
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (props: BoxProps, ref) => {
    const containerProperty = { ...DEFAULT_PARAM, ...props };
    const { children, position, left, right, size } = containerProperty;
    const boxStyle: BoxBaseProps = { position, left, right, size };

    return (
      <BoxWrapper {...{ boxStyle }}>
        <Container ref={ref} {...containerProperty}>
          {children}
        </Container>
      </BoxWrapper>
    );
  },
);

const BoxWrapper = styled.div<BoxBaseProps>(
  ({ position, left, right, size }) => ({
    position,
    left,
    right,
    padding: BOX_PADDING[size!],
    borderRadius: '15px',
  }),
);
