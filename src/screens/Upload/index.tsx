import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

import Button from '../../components/Button';
import Header from '../../components/Header';
import PhotoPicker from '../../components/PhotoPicker';
import { Container, Content, TextSection, Percent, Size } from './styles';

const Upload: React.FC = () => {
  const [imageUri, setImageUri] = useState<string>('');

  const handlePickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status == 'granted') {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4, 4],
        quality: 1,
      });
      console.log(result);
      if (!result.cancelled) {
        setImageUri(result.uri);
      }
    }
  };

  return (
    <Container>
      <Header title="Lista de Compras" />
      <Content>
        <PhotoPicker imageUri={imageUri} onPress={handlePickImage} />
        <Button title="Fazer Upload" onPress={() => {}} />
        <TextSection>
          <Percent>0%</Percent>
          <Size>0 de 100 bytes transferidos</Size>
        </TextSection>
      </Content>
    </Container>
  );
};

export default Upload;
