import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PageList } from '@/components/common/PageList/pageList';

export default {
  component: PageList,
  title: 'View/PageList',
  argTypes: {
    start: {
      description: '페이지 시작점, 기본값 1',
    },
    end: {
      description: '페이지 끝점',
    },
    focus: {
      description: '현제 페이지 번호, 다른 버튼 클릭시 그 번호로 상태 변경',
    },
    skipNumber: {
      description:
        '생략 기준 번호,리스트 항목 갯수. 이 번호보다 end가 커지면 생략 로직 실행, 기본값 end',
    },
    setFocus: {
      description: 'focus 상태를 바꿔줄 dispatch 함수',
    },
  },
} as ComponentMeta<typeof PageList>;

const Template: ComponentStory<typeof PageList> = args => (
  <PageList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  end: 10,
  focus: 2,
};
