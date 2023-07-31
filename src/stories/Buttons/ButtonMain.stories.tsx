import type { Meta, StoryObj } from '@storybook/react';
import { ButtonMain } from '../../components/UI/Main/ButtonMain';

const meta = {
    title: 'ButtonMain',
    component: ButtonMain,
    tags: ['autodocs'],
    argTypes: {
      // disabled: {
      //   type: 'boolean',
      // },
      // buttonColor: {
      //   control: {
      //     type: 'color',
      //     presetColors: ['#243CBB', '#22FFAA', '#E4E9F1'],
      //   },
      // },
      // textColor: {
      //   control: {
      //     type: 'color',
      //     presetColors: ['#FFFFFF' , '#060C23']
      //   }
      // }
    },
} satisfies Meta<typeof ButtonMain>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    label: 'Добавить бота',
    size: 'l',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: 'Остановить',
    size: 'l',
    buttonColor: 'grey',
    textColor: '#060C23',
    disabled: false,
  },
};

export const Small: Story = {
  args: {
    type: 'primary',
    label: '',
    size: 's',
    disabled: false,
  },
};


export const PrimaryDisabled: Story = {
  args: {
    type: 'primary',
    label: 'Добавить бота',
    size: 'l',
    disabled: true,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    type: 'secondary',
    label: 'Остановить',
    size: 'l',
    disabled: true,
  },
};
