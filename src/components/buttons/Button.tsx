import React from 'react';

import { Button as ButtonC, ButtonProps } from '@chakra-ui/react';

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return <ButtonC {...props}>{props.children}</ButtonC>;
};

export default Button;
