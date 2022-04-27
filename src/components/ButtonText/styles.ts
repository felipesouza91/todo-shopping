import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  height: 60px;
`;
export const Title = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.BLACK};
  margin-left: 7px;
`;
