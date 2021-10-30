import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";

import RadioToggle, { Props } from "./RadioToggle";

export default {
  component: RadioToggle,
  title: "Components/Form Elements/RadioToggle",
} as Meta;

const Template: Story<Props> = (args) => {
  const [currentValue, setCurrentValue] = useState(args.currentValue);

  return (
    <form>
      <RadioToggle
        {...{ ...args, currentValue }}
        onChange={(e) => setCurrentValue(e.target.value)}
      />
    </form>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  name: "share",
  currentValue: "no",
  buttons: [
    { id: "hide", value: "no", label: "🤐" },
    { id: "unhide", value: "yes", label: "😜" },
  ],
};
