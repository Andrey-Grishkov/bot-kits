import type { Meta, StoryObj } from '@storybook/react';
import { ButtonCopy } from '../../components/UI/Copy/ButtonCopy';

const meta = {
    title: 'ButtonCopy',
    component: ButtonCopy,
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonCopy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
  },
};