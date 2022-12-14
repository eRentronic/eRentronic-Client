import { forwardRef } from 'react';
import styled, { CSSObject } from 'styled-components';

import {
  Container,
  ContainerProps,
  DEFAULT_CONTAINER_PARAMS,
} from '@/components/common/Layout/Core';
import { globalTheme } from '@/styles/globalTheme';

type BoxBaseProps = {
  position?: 'static' | 'absolute' | 'relative' | 'fixed';
  left?: number;
  right?: number;
  size?: 'small' | 'medium' | 'large';
  boxColor?: keyof typeof globalTheme.pallete;
  borderWeight?: number;
  borderColor?: keyof typeof globalTheme.pallete;
  boxStyles?: CSSObject;
};

type BoxProps = ContainerProps<'div'> &
  Omit<BoxBaseProps, keyof ContainerProps<'div'>>;

const DEFAULT_PARAM: BoxProps = {
  ...DEFAULT_CONTAINER_PARAMS,
  position: 'static',
  left: undefined,
  right: undefined,
  size: 'medium',
  boxColor: 'primary',
  borderWeight: 1,
  borderColor: 'primary',
};

const BOX_PADDING = {
  large: '20px',
  medium: '14px',
  small: '8px',
};

export const Box = forwardRef<HTMLDivElement, BoxProps>(
  (props: BoxProps, ref) => {
    const containerProperty = { ...DEFAULT_PARAM, ...props };
    const {
      children,
      position,
      left,
      right,
      size,
      boxColor,
      borderColor,
      borderWeight,
      boxStyles,
    } = containerProperty;
    const boxProps: BoxBaseProps = {
      position,
      left,
      right,
      size,
      boxColor,
      borderColor,
      borderWeight,
      boxStyles,
    };

    return (
      <BoxWrapper {...boxProps}>
        <Container ref={ref} {...containerProperty}>
          {children}
        </Container>
      </BoxWrapper>
    );
  },
);

const BoxWrapper = styled.div<BoxBaseProps>(
  ({
    position,
    left,
    right,
    size = 'medium',
    boxColor = 'white',
    borderColor = 'primary',
    borderWeight,
    boxStyles,
    theme,
  }) => ({
    position,
    left,
    right,
    padding: BOX_PADDING[size],
    borderRadius: '15px',
    border: `${borderWeight}px solid ${theme.pallete[borderColor]}`,
    backgroundColor: theme.pallete[boxColor],
    ...boxStyles,
  }),
);
