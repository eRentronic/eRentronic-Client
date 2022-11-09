import { ComponentStory, ComponentMeta } from '@storybook/react';

import { globalTheme } from '@/styles/globalTheme';

import { ProgressBar } from './ProgressBar';

export default {
  title: 'View/Indicator/ProgressBar',
  component: ProgressBar,
  argTypes: {
    barColor: {
      control: 'select',
      options: Object.keys(globalTheme.pallete),
      description: '프로그래스바 진행도 색상 옵션 팔레트만 적용됨',
    },
    backgroundColor: {
      control: 'select',
      options: Object.keys(globalTheme.pallete),
      description: '프로그래스바 배경 색상 옵션 팔레트만 적용됨',
    },
    width: {
      description:
        'width를 결정합니다. [number]% 와 number를 전달받아 각각에 맞는 비율로 변환합니다. 둘다 사용 가능하단 뜻입니다.',
    },
  },
} as ComponentMeta<typeof ProgressBar>;

const Template: ComponentStory<typeof ProgressBar> = args => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  width: 400,
};
