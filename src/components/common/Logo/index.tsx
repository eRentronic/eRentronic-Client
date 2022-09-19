import { useNavigate } from 'react-router-dom';

import { Text } from '@/components/common/Text';

import { LogoProps } from './types';

export function Logo({ size, destination }: LogoProps) {
  const fontSize = size === 'small' ? '40px' : '50px';
  const navigate = useNavigate();
  const gotoHome = () => {
    if (destination) {
      navigate(destination);
    }
  };
  return (
    <Text
      styles={{
        fontWeight: `900`,
        fontSize: `${fontSize}`,
        marginRight: `${size === 'small' ? '30px' : '0'}`,
        cursor: 'pointer',
      }}
      onClick={gotoHome}
    >
      eRentronic
    </Text>
  );
}
