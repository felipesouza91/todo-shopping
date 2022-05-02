import React from 'react';
import { View } from 'react-native';

import ButtonIcon from '../ButtonIcon';

import { Container, ItemBox, Description, Quantity, Options } from './styles';

export interface IFileData {
  id: string;
  description: string;
  uri: string;
}

type IFileProps = {
  data: IFileData;
};

const File: React.FC<IFileProps> = ({ data }) => {
  return (
    <Container>
      <ItemBox>
        <Description>{data.description}</Description>
        <Quantity>{data.uri}</Quantity>
      </ItemBox>
      <Options>
        <View style={{ marginBottom: 8 }}>
          <ButtonIcon icon="delete-outline" color="alert" onPress={() => {}} />
        </View>
        <ButtonIcon icon="visibility" size="small" onPress={() => {}} />
      </Options>
    </Container>
  );
};

export default File;
