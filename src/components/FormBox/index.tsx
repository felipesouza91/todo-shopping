import React from 'react';
import { View } from 'react-native';
import ButtonIcon from '../ButtonIcon';
import Input from '../Input';
import { Container } from './styles';

const FormBox: React.FC = () => {
  return (
    <Container>
      <Input placeholder="Nome do produto" size="medium" />
      <Input
        placeholder="0"
        keyboardType="numeric"
        size="small"
        style={{ marginHorizontal: 8 }}
      />
      <ButtonIcon icon="shopping-cart" size="large" />
    </Container>
  );
};

export default FormBox;
