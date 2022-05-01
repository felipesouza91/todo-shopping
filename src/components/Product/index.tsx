import React from 'react';
import { View } from 'react-native';

import ButtonIcon from '../ButtonIcon';

import { Container, ItemBox, Description, Quantity, Options } from './styles';

export interface IProductData {
  id: string;
  description: string;
  quantity: number;
  done: boolean;
}

type IProductProps = {
  data: IProductData;
};

const Product: React.FC<IProductProps> = ({ data }) => {
  return (
    <Container>
      <ItemBox>
        <Description done={data.done}>{data.description}</Description>
        <Quantity done={data.done}>Quantidade: {data.quantity}</Quantity>
      </ItemBox>
      <Options>
        <View style={{ marginBottom: 8 }}>
          <ButtonIcon
            icon={data.done ? 'undo' : 'check'}
            size="small"
            onPress={() => {}}
          />
        </View>

        <ButtonIcon icon="delete-outline" color="alert" onPress={() => {}} />
      </Options>
    </Container>
  );
};

export default Product;
