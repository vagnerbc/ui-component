import React from 'react';

import { Input as InputC, InputProps } from '@chakra-ui/react';

const Input: React.FC<InputProps> = ({ ...props }) => {
  return <InputC variant="primary" {...props} />;
};

export default Input;
