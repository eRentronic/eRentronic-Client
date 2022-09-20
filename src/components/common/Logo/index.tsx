import { Link } from 'react-router-dom';

import { Text } from '@/components/common/Text';

import { LogoProps } from './types';

const LOGO_SIZE = { small: '40px', large: '50px' };
const LOGO_MARGIN = { small: '30px', large: '0' };

export function Logo({ size, destination }: LogoProps) {
  const logoSize = LOGO_SIZE[size];
  const logoMargin = LOGO_MARGIN[size];

  const logo = (
    <Text
      typography="Black"
      styles={{
        fontSize: logoSize,
        marginRight: logoMargin,
        cursor: 'pointer',
      }}
    >
      eRentronic
    </Text>
  );

  return destination ? <Link to={destination}>{logo}</Link> : logo;
}
