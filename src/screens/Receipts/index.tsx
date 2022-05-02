import React, { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import Header from '../../components/Header';
import PhotoPicker from '../../components/PhotoPicker';
import File from '../../components/File';
import { Container, Content, ImageBox, ImageText, FileList } from './styles';

const data = [
  { id: '1', description: 'teste', uri: 'image/image.jpd' },
  { id: '2', description: 'teste 1 ', uri: 'image/image2.jpd' },
];

const Receipts: React.FC = () => {
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
      <Header title="Comprovantes" />
      <Content>
        <ImageBox>
          <PhotoPicker imageUri={imageUri} onPress={handlePickImage} />
          <ImageText>Informação da foto</ImageText>
        </ImageBox>

        <FileList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => <File data={item} />}
        />
      </Content>
    </Container>
  );
};

export default Receipts;
