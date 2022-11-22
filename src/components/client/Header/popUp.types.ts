import { defaultPopUpOpenState } from '@/recoils/popUp/popUp';

export type PopUpProps = {
  title: string;
  options: string[];
  id: keyof typeof defaultPopUpOpenState;
};

export type MenuProps = {
  isVisible: boolean;
};
