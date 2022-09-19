import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Text } from './Text';
import { TextProps } from './Text/types';

type CautionProps = {
  children: ReactNode;
  linkPath: string;
  size: 'large' | 'medium' | 'small';
};

export function Caution({ children, linkPath, size }: CautionProps) {
  const TextSize =
    size === 'large'
      ? 'Bold'
      : size === 'medium'
      ? 'Light'
      : size === 'small'
      ? 'Thin'
      : 'Regular';

  return (
    <Link to={linkPath}>
      <LinkText typography={TextSize} color="grey4">
        {children}
      </LinkText>
    </Link>
  );
}

const LinkText = styled(Text)<TextProps<'span'>>`
  cursor: pointer;
`;
