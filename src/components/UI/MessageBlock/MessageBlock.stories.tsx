import { Meta, StoryObj } from '@storybook/react';
import { MessageBlock, MessageBlockProps } from './MessageBlock';


const meta: Meta<typeof MessageBlock> = {
    title: 'UI/MessageBlock',
    component: MessageBlock,
  };
  
  export default meta;
  type Story = StoryObj<typeof MessageBlock>;
  
  
  export const Default: Story = {
    args: {
      placeholder: 'Введите сообщение...',
    },
  };