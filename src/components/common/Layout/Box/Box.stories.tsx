import { ComponentStory, ComponentMeta } from '@storybook/react';

import { globalTheme } from '@/styles/globalTheme';

import { Box } from '.';

export default {
  title: 'View/Layout/Box',
  component: Box,
  argTypes: {
    boxColor: {
      control: 'select',
      options: [...Object.keys(globalTheme.pallete)],
      description: '박스 배경색상 설정.',
    },
    borderColor: {
      control: 'select',
      options: [...Object.keys(globalTheme.pallete)],
      description: '박스 외각선 색상 설정.',
    },
  },
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = args => <Box {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '테스트',
  boxColor: 'white',
};
