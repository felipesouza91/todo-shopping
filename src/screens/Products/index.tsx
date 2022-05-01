import React from 'react';
import FormBox from '../../components/FormBox';
import Header from '../../components/Header';
import ProductList from '../../components/ProductList';

import { Container, Body } from './styles';

const data = [
  {
    id: 'string',
    description: 'teste de quantos',
    quantity: 0,
    done: false,
  },
  { id: 'string2', description: 'string2', quantity: 0, done: true },
];

const Products: React.FC = () => {
  return (
    <Container>
      <Header title="Produtos" />

      <Body>
        <FormBox />
        <ProductList data={data} />
      </Body>
    </Container>
  );
};

export default Products;
