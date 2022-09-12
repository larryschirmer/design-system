import React from 'react';

import { Wrapper } from './Button.styles';

type Props = React.HTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;
