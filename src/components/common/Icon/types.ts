import * as ICONS from '@/assets/icons';

export type SVGtypes = keyof typeof ICONS;

export type IconProps = {
  iconSrc: SVGtypes;
  width?: number;
  height?: number;
  stroke?: string;
  fill?: string;
};
