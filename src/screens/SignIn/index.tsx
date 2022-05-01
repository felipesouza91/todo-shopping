import React from 'react';
import Button from '../../components/Button';
import ButtonText from '../../components/ButtonText';
import Input from '../../components/Input';

import { Container, TitleSection, Title, Subtitle, Account } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <TitleSection>
        <Title>Todo-Shopping</Title>
        <Subtitle>monte sua lista de compras, te ajudar nas compras</Subtitle>
      </TitleSection>
      <Input placeholder="E-mail" />
      <Input placeholder="Senha" />
      <Button title="Entrar" />
      <Account>
        <ButtonText
          title="Recuperar Senha"
          onPress={() => {
            console.log('Teste');
          }}
        />
        <ButtonText title="Criar minha conta" />
      </Account>
    </Container>
  );
};

export default SignIn;
