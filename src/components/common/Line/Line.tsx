import styled, { CSSObject } from 'styled-components';

import { globalTheme } from '@/styles/globalTheme';

const { pallete } = globalTheme;

type LineProps = {
  width: `${number}%` | number;
  height: `${number}%` | number;
  margin?: string | number;
  styles?: CSSObject;
  isColumn: boolean;
  color: keyof typeof pallete;
};

const DEFAULT_LINE_PROPS: LineProps = {
  width: '100%',
  height: 1,
  color: 'grey3',
  isColumn: false,
};

export function Line(props: Partial<LineProps>) {
  const lineProps = { ...DEFAULT_LINE_PROPS, ...props };
  const { isColumn, width, height } = lineProps;

  const lineWidth = isColumn ? height : width;
  const lineHeight = isColumn ? width : height;

  return <StyledLine {...lineProps} width={lineWidth} height={lineHeight} />;
}

const StyledLine = styled.span<LineProps>(
  ({ width, height, styles, margin, color, theme }) => ({
    display: 'block',
    margin,
    width,
    height,
    backgroundColor: theme.pallete[color],
    borderRadius: 9999999,
    ...styles,
  }),
);
