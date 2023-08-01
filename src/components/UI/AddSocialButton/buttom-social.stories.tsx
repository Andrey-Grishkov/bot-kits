import svgFacebook from "../../../images/icons/facebook.svg";
import svgPhone from "../../../images/icons/phone.svg";
import type { Meta, StoryObj } from "@storybook/react";

import { AddSocialButton } from "./AddSocialButton";

const meta: Meta<typeof AddSocialButton> = {
  component: AddSocialButton,
  argTypes: {
    variant: {
        control: 'select',
        options: ['active', 'inactive']
    }
}
};

export default meta;
type Story = StoryObj<typeof AddSocialButton>;

export const Facebook: Story = {
    args: {
        children: <img src={svgFacebook} />,
        value:'Facebook',
    },
};

export const Phone: Story = {
    args: {
        children: <img src={svgPhone} />,
        value:'Фото',
    },
};