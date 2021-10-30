import React, { useState } from "react";
import { Story, Meta } from "@storybook/react";

import Input, { Props } from "./Input";

export default {
  component: Input,
  title: "Components/Form Elements/Input",
} as Meta;

const Template: Story<Props> = (args) => {
  const [value, setValue] = useState(args.value);

  return (
    <form>
      <Input
        {...{ ...args, value }}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export const Primary = Template.bind({});

Primary.args = {
  id: "userName",
  label: "Name",
  name: "name",
  value: "Roy",
  placeholder: "Your Name",
};
