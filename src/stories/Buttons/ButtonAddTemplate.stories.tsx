import type { Meta, StoryObj } from '@storybook/react';
import { ButtonAddTemplate } from '../../components/UI/Buttons/AddTemplate/ButtonAddTemplate';

const meta = {
    title: 'ButtonAddTemplate',
    component: ButtonAddTemplate,
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonAddTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'default',
    icon: "answering machine.svg",
    label: 'Бот автоответчик'
  },
};