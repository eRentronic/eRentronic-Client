import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { ValueOf } from '@/utils/helperType';

import { Text } from '..';
import { TextProps } from '../types';

type CautionProps = {
  children: ReactNode;
  linkPath: string;
  size: 'large' | 'medium' | 'small';
};

const TEXT_SIZE = {
  large: 'Bold',
  medium: 'Light',
  small: 'Thin',
} as const;

export function NavText({ children, linkPath, size }: CautionProps) {
  const textSize: ValueOf<typeof TEXT_SIZE> = TEXT_SIZE[size];

  return (
    <Link to={linkPath}>
      <LinkText typography={textSize} color="grey4">
        {children}
      </LinkText>
    </Link>
  );
}

const LinkText = styled(Text)<TextProps<'span'>>`
  cursor: pointer;
`;
