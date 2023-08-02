import { Meta, StoryObj } from '@storybook/react';
import { PageButton, PageButtonProps } from './PageButton';

const meta: Meta<typeof PageButton> = {
  title: 'UI/PageButton',
  component: PageButton,
};

export default meta;
type Story = StoryObj<typeof PageButton>;

export const Default: Story = {
  args: {
    title: 'Страница 1',
  },
};

export const Selected: Story = {
  args: {
    title: 'Страница 1',
    selected: true,
  },
};

export const Disabled: Story = {
    args: {
      title: 'Страница 1',
      disabled: true,
    },
  };
