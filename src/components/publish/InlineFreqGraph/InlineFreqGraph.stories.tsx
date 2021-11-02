import React from "react";
import { Story, Meta } from "@storybook/react";

import InlineFreqGraph, { Props } from "./InlineFreqGraph";

export default {
  component: InlineFreqGraph,
  title: "Components/Inline Line Graph",
} as Meta;

const Template: Story<Props> = (args) => <InlineFreqGraph {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: [
    "2021-10-01T14:47:02.759Z",
    "2021-10-02T14:47:02.759Z",
    "2021-10-02T14:47:02.759Z",
    "2021-10-03T14:47:02.759Z",
    "2021-10-03T14:47:02.759Z",
    "2021-10-03T14:47:02.759Z",
    "2021-10-05T14:47:02.759Z",
    "2021-10-06T14:47:02.759Z",
    "2021-10-06T14:47:02.759Z",
    "2021-10-30T14:47:02.759Z",
    "2021-10-30T14:47:02.759Z",
    "2021-11-01T14:47:02.759Z",
  ],
  color: "black",
};
