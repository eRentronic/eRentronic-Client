import styled, { css } from 'styled-components';

import { StyledTextProps } from './types';

export const StyledText = styled.span<StyledTextProps>`
  ${({ theme, color = 'black', typography = 'Regular' }) => css`
    font-weight: ${theme.typography[typography].weight};
    font-size: ${theme.typography[typography].size};
    color: ${theme.pallete[color]};
  `}
`;
