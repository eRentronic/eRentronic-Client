import { useNavigate } from 'react-router-dom';

import { Text } from '@/components/common/Text';

import { LogoProps } from './types';

const LOGO_SIZE = { small: '40px', large: '50px' };
const LOGO_MARGIN = { small: '30px', large: '0' };

export function Logo({ size, destination }: LogoProps) {
  const navigate = useNavigate();

  const logoSize = LOGO_SIZE[size];
  const logoMargin = LOGO_MARGIN[size];

  const gotoHome = (e: React.MouseEvent) => {
    e.preventDefault();

    if (destination) {
      navigate(destination);
    }
  };

  return (
    <Text
      as="a"
      typography="Black"
      styles={{
        fontSize: logoSize,
        marginRight: logoMargin,
        cursor: 'pointer',
      }}
      onClick={gotoHome}
    >
      eRentronic
    </Text>
  );
}
