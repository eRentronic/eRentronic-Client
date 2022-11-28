import { ComponentStory, ComponentMeta } from '@storybook/react';
import styled from 'styled-components';

import { globalTheme } from '@/styles/globalTheme';

import { Button } from '.';

const { pallete } = globalTheme;

/** !! Button이 export 할때 typeof Button으로
 * 타입 단언을 하여서 export하는 형식이라
 * ComponentMeta,ComponentStory적용 안해도됨 */

export default {
  component: Button,
  title: 'View/Button/Core',
  args: { size: 'medium' },
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
      options: Object.keys(pallete),
    },
    styles: {
      description: '스타일 옵션 객체',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'small',
  disabled: false,
  children: '자식',
  styles: {},
};

export const Size = Template.bind({});
Size.args = {
  ...Default.args,
  children: '자식',
};

Size.decorators = [
  Story => {
    return (
      <>
        <Layout>
          <Button {...Size.args} size="small" />
          <Button {...Size.args} size="medium" />
          <Button {...Size.args} size="large" />
        </Layout>
        <Story />
      </>
    );
  },
];

const Layout = styled.div`
  display: flex;
  gap: 10px;
`;
