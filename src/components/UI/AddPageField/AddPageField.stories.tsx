import { Meta, StoryObj } from '@storybook/react';
import { AddPageField, IAddPageFieldProps } from './AddPageField';

const meta: Meta<typeof AddPageField> = {
  title: 'UI/AddPageField',
  component: AddPageField,
};

export default meta;
type Story = StoryObj<typeof AddPageField>;

export const Default: Story = {
    args: {
      placeholder: 'Введите ключ доступа',
    },
  };
