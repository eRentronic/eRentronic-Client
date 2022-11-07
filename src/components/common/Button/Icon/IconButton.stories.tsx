import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './IconButton';

export default {
  title: 'View/IconButton',
  component: IconButton,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: '사이즈 설정.',
    },
    disabled: {
      controle: 'boolean',
      description: '버튼 활성화 여부',
    },
    color: {
      description: '버튼 배경 색상',
      control: 'select',
      options: [
        'primary',
        'secondary',
        'warning',
        'grey1',
        'grey2',
        'grey3',
        'grey4',
        'grey5',
        'grey6',
        'black',
        'white',
      ],
    },
    styles: {
      description: '스타일 옵션 객체',
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = args => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  iconSrc: 'MOON',
  size: 'small',
  children: '테스트',
  color: 'primary',
};
