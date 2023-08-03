import type { Meta, StoryObj } from '@storybook/react';
import { ButtonTutorial } from '../../components/UI/Buttons/Tutorial/ButtonTutorial';

const meta = {
    title: 'ButtonTutorial',
    component: ButtonTutorial,
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonTutorial>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    // type: 'default',
    state: 'active',
    label: 'Пошаговая инструкция'
  },
};