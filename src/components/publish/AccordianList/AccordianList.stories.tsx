import React from "react";
import { Story, Meta } from "@storybook/react";

import AccordianList, { Props } from "./AccordianList";

export default {
  component: AccordianList,
  title: "Components/Accordian List",
} as Meta;

const Template: Story<Props> = (args) => <AccordianList {...args} />;

export const Default = Template.bind({});

const listItems = ["Item One", "Item Two", "Item Three"];

Default.args = {
  title: "Blog",
  list: listItems.map((item) => <div>{item}</div>),
};

export const Open = Template.bind({});

Open.args = {
  title: "Blog",
  list: listItems.map((item) => <div>{item}</div>),
  initialOpen: true,
};
