import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
    // argTypes: {
    //   disabled: {
    //     type: 'boolean',
    //   },
    // },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Добавить бота',
    size: 'l',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: 'Остановить',
    size: 'm',
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    primary: true,
    label: '',
    size: 's',
    disabled: false,
  },
};

export const PrimaryDisabled: Story = {
  args: {
    primary: true,
    label: 'Добавить бота',
    size: 'l',
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    primary: false,
    label: 'Остановить',
    size: 'm',
    disabled: true,
  },
};
