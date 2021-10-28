import React, { ChangeEventHandler, Fragment } from "react";

import styles from "./RadioToggle.module.scss";

const {
  "radio-toggle": radioToggleClass,
  "horizontal-break": horizontalBreakClass,
} = styles;

type RadioButton = {
  id: string;
  value: string;
  label: string;
};

type Props = {
  name: string;
  currentValue: string;
  buttons: RadioButton[];
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const RadioToggle = ({ name, currentValue, buttons, onChange }: Props) => {
  return (
    <div className={radioToggleClass}>
      {buttons.map(({ id, value, label }, btnIdx) => (
        <Fragment key={id}>
          <input
            type="radio"
            {...{ id, name, value, onChange }}
            checked={currentValue === value}
          />
          <label htmlFor={id}>{label}</label>
          {btnIdx < buttons.length - 1 && (
            <div className={horizontalBreakClass} />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default RadioToggle;
