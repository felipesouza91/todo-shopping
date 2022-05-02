import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { IFileData } from '../../components/File';

export const Container = styled.View`
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  padding: 0 15px;
`;

export const ImageBox = styled.View`
  align-items: center;
`;
export const ImageText = styled.Text`
  font-size: 13px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY800};
`;

export const FileList = styled(FlatList as new () => FlatList<IFileData>)<
  FlatListProps<IFileData>
>``;
