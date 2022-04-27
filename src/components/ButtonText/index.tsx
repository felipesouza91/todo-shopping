import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';
interface IButtonTextProps extends TouchableOpacityProps {
  title: String;
}
const ButtonText: React.FC<IButtonTextProps> = ({ title, ...rest }) => {
  return (
    <Container activeOpacity={0.4} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};

export default ButtonText;
