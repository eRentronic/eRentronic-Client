import styled from 'styled-components';

import { StyledTextProps } from './types';

export const StyledText = styled.span<StyledTextProps>(
  ({ theme, color = 'black', typography = 'Regular', styles }) => ({
    fontWeight: theme.typography[typography].weight,
    fontSize: theme.typography[typography].size,
    color: theme.pallete[color],
    ...styles,
  }),
);
