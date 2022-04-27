import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface IButtonProps extends TouchableOpacityProps {
  title: String;
}

const Button: React.FC<IButtonProps> = ({ title, ...rest }) => {
  return (
    <Container activeOpacity={0.7} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
