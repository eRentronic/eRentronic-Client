import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '.';

export default {
  component: Modal,
  title: 'View/Layout/Modal',
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});

export const Radi15 = Template.bind({});
Radi15.args = {
  radius: '15px',
};

export const Radi999 = Template.bind({});
Radi999.args = {
  radius: '999px',
};
