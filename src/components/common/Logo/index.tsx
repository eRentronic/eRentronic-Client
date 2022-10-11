import { MouseEventHandler } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Text } from '@/components/common/Text';

import { LogoProps } from './types';

const LOGO_SIZE = { small: '30px', medium: '40px', large: '50px' };
const LOGO_MARGIN = { small: '0', medium: '30px', large: '0' };

// TODO: 빈 패스일 경우 막을것인가 말것인가

export function Logo({ size, destination, styles }: LogoProps) {
  const logoSize = LOGO_SIZE[size];
  const logoMargin = LOGO_MARGIN[size];

  const { pathname: currentPage } = useLocation(); // 혹시 몰라서

  const validLink: MouseEventHandler<HTMLAnchorElement> = e => {
    if (!destination) {
      e.preventDefault();
    }
  };

  return (
    <Link
      to={destination || currentPage}
      onClick={validLink}
      style={{ ...styles }}
    >
      <Text
        typography="Black"
        styles={{
          fontSize: logoSize,
          marginRight: logoMargin,
          cursor: 'pointer',
          ...styles,
        }}
      >
        eRentronic
      </Text>
    </Link>
  );
}
