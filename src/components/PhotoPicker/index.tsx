import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Container, Image, ImageEmptyTextBox, EmptyText } from './styles';

interface IPhotoPickerProps extends TouchableOpacityProps {
  imageUri: string;
}

const PhotoPicker: React.FC<IPhotoPickerProps> = ({ imageUri, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} {...rest}>
      <Container>
        {imageUri ? (
          <Image source={{ uri: imageUri }} />
        ) : (
          <ImageEmptyTextBox>
            <EmptyText>
              Clique aqui para adicionar ou para trocar a foto
            </EmptyText>
          </ImageEmptyTextBox>
        )}
      </Container>
    </TouchableOpacity>
  );
};

export default PhotoPicker;
