import type { Meta, StoryObj } from '@storybook/react';
import { ButtonPlus } from './ButtonPlus';

const meta = {
    title: 'ButtonPlus',
    component: ButtonPlus,
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonPlus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
  },
};