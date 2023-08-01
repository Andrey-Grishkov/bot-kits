import type { Meta, StoryObj } from '@storybook/react';
import { ButtonMain } from '../../components/UI/Buttons/Main/ButtonMain';

const meta = {
    title: 'ButtonMain',
    component: ButtonMain,
    tags: ['autodocs'],
} satisfies Meta<typeof ButtonMain>;


export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: 'purple',
    label: 'Добавить бота',
    size: 'l',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    theme: 'grey',
    label: 'Остановить',
    size: 'l',
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    theme: 'purple',
    label: '',
    size: 's',
    disabled: false,
  },
};


export const PrimaryDisabled: Story = {
  args: {
    theme: 'purple',
    label: 'Добавить бота',
    size: 'l',
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    theme: 'grey',
    label: 'Остановить',
    size: 'l',
    disabled: true,
  },
};
