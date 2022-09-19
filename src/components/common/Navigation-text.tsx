import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

import { Text } from './Text';

type CautionProps = {
  Children: ReactNode;
  linkPath: string;
  size: 'large' | 'medium' | 'small';
};

export function Caution({ Children, linkPath, size }: CautionProps) {
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
      <Text typography={TextSize} color="grey4">
        {Children}
      </Text>
    </Link>
  );
}
