import * as ICONS from '@/assets/icons';

import { IconProps } from './types';

export const Icon = (props: IconProps) => {
  const {
    iconSrc,
    width = 20,
    height = 20,
    stroke = 'none',
    fill = 'none',
    viewBox = '0 0 32 32',
  } = props;

  const SVGIcon = ICONS[iconSrc];

  return (
    <SVGIcon
      width={width}
      height={height}
      stroke={stroke}
      fill={fill}
      viewBox={viewBox}
    />
  );
};
