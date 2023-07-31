import type { Meta, StoryObj } from '@storybook/react';
import { ButtonAddBlock } from './ButtonAddBlock';

const meta = {
    title: 'ButtonAddBlock',
    component: ButtonAddBlock,
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonAddBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    label: 'Блок сообщений'
  },
};