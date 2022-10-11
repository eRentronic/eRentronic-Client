import { CSSObject } from 'styled-components';

export type LogoProps = {
  size: 'small' | 'large' | 'medium';
  destination?: string;
  styles?: CSSObject;
};
