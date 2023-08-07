import { Meta, StoryObj } from '@storybook/react';
import { Input, InputProps } from './Input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

// export const Default: Story = {
//   render: () => <Input placeholder='Введите ключ доступа' />,
// }

export const Default: Story = {
  args: {
    placeholder: 'Введите ключ доступа',
  },
};

export const Filled: Story = {
  args: {
    value: 'Введите ключ доступа',
  },
};

export const Incorrect: Story = {
  args: {
    placeholder: 'Введите ключ доступа',
    error: 'Вы ввели неправильное значение'
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Введите ключ доступа',
    disabled: true,
  },
};

export const DefaultSmall: Story = {
  args: {
    size: 'small',
    placeholder: 'Введите ключ доступа',
  },
};

export const FilledSmall: Story = {
  args: {
    size: 'small',
    value: 'Введите ключ доступа',
  },
};

export const IncorrectSmall: Story = {
  args: {
    size: 'small',
    placeholder: 'Введите ключ доступа',
    error: 'Вы ввели неправильное значение'
  },
};

export const DisabledSmall: Story = {
  args: {
    size: 'small',
    placeholder: 'Введите ключ доступа',
    disabled: true,
  },
};
