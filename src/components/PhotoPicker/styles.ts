import { ImageProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 270px;
  height: 270px;
  margin-top: 32px;
  margin-bottom: 12px;
`;

export const Image = styled.Image<ImageProps>`
  width: 270px;
  height: 270px;
  border-radius: 5px;
`;

export const ImageEmptyTextBox = styled.View`
  width: 270px;
  height: 270px;
  padding: 10px;
  border-width: 3px;
  border-radius: 5px;
  border-style: dashed;
  justify-content: center;
  align-items: center;
  border-color: ${({ theme }) => theme.COLORS.GRAY50};
`;

export const EmptyText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY800};
  text-align: center;
  padding-top: 18px;
  padding-bottom: 18px;
`;
