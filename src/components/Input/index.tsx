import React from 'react';
import { TextInputProps } from 'react-native';

import { TextInput } from './styles';

type Props = TextInputProps & {
  size?: 'small' | 'medium' | 'large';
};

const Input: React.FC<Props> = ({ size = 'large', ...rest }) => {
  return <TextInput size={size} {...rest} />;
};

export default Input;
