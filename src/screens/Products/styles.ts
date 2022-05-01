import { FlatList, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Body = styled.View`
  padding: 24px;
`;
