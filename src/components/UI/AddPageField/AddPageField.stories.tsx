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
    pages: [],
  },
};

export const OnePage: Story = {
  args: {
    pages: [
      {
        title: 'Страница 1',
      },
    ],
  },
};

export const TwoPage: Story = {
  args: {
    pages: [
      {
        title: 'Страница 1',
      },
      {
        title: 'Страница 2',
      },
    ],
  },
};

export const ManyPage: Story = {
  args: {
    pages: [
      {
        title: 'Страница 1',
      },
      {
        title: 'Страница 2',
      },
      {
        title: 'Страница 4',
      },
      {
        title: 'Страница 4',
      },
      {
        title: 'Страница 5',
      },
      {
        title: 'Страница 6',
      },
    ],
  },
};
