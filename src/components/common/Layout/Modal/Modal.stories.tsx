import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from '.';

export default {
  component: Modal,
  title: 'View/Layout/Modal',
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />;

export const Default = Template.bind({});
