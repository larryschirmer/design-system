import React from "react";
import { Story, Meta } from "@storybook/react";

import WordCloud, { Props } from "./WordCloud";

export default {
  component: WordCloud,
  title: "Components/WordCloud",
} as Meta;

const Template: Story<Props> = (args) => <WordCloud {...args} />;

export const Default = Template.bind({});

Default.args = {
  words: [
    { text: "one", value: 2 },
    { text: "two", value: 4 },
    { text: "three", value: 8 },
    { text: "four", value: 16 },
    { text: "five", value: 32 },
  ],
};
