import React from "react";
import { Story, Meta } from "@storybook/react";

import Button, { Props } from "./Button";

export default {
  component: Button,
  title: "Components/Button",
} as Meta;

const Template: Story<Props> = ({ children, isSecondary, type }) => (
  <Button {...{ isSecondary, type }}>{children}</Button>
);

export const Primary = Template.bind({});

Primary.args = {
  children: "Click",
  isSecondary: false,
  type: "button",
};

export const Secondary = Template.bind({});

Secondary.args = {
  children: "Click",
  isSecondary: true,
  type: "button",
};
