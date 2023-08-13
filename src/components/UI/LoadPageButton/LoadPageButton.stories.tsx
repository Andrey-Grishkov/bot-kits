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
    title: 'Загрузить страницу',
  },
};

export const Disabled: Story = {
  args: {
    title: 'Загрузить страницу',
    disabled: true,
  },
};

export const Medium: Story = {
  args: {
    title: 'Загрузить',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    title: 'Загрузить',
    size: 'sm',
  },
};