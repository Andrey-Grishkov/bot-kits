import { Meta, StoryObj } from '@storybook/react';
import { LoadPageButton, LoadPageButtonProps } from './LoadPageButton';

const meta: Meta<typeof LoadPageButton> = {
  title: 'UI/LoadPageButton',
  component: LoadPageButton,
};

export default meta;
type Story = StoryObj<typeof LoadPageButton>;

export const Default: Story = {
  args: {
    //   placeholder: 'Введите ключ доступа',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
