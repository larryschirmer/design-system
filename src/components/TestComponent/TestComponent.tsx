import React from "react";

import "./TestComponent.module.scss";

type Props = {
  theme: "primary" | "secondary";
}

const TestComponent = ({ theme }: Props) => (
  <div
    data-testid="test-component"
    className={`test-component test-component-${theme}`}
  >
    <h1 className="heading">I'm the test component</h1>
    <h2>Made with love by Harvey</h2>
  </div>
);

export default TestComponent;
