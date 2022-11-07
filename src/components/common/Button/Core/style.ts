import styled from 'styled-components';

import * as TYPE from '@/components/common/Button/Core/types';

const DEFAULT_BUTTON_DESIGN = {
  width: { large: '200px', medium: '150px', small: '90px' },
  height: { large: '60px', medium: '45px', small: '30px' },
  radius: { large: '10px', medium: '7px', small: '5px' },
} as const;

export const StyledButton = styled.button<TYPE.StyledButtonProps>(
  ({ theme, color = 'primary', size = 'medium', styles }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: theme.pallete[color],
    width: DEFAULT_BUTTON_DESIGN.width[size],
    height: DEFAULT_BUTTON_DESIGN.height[size],

    wordBreak: 'break-word',
    borderRadius: DEFAULT_BUTTON_DESIGN.radius[size],
    border: 'none',

    '&:hover': {
      transform: 'scale(0.9)',
      transition: '0.2s',
    },

    ...styles,
  }),
);
