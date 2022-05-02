import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Content = styled.View`
  padding: 0 62px;
`;

export const TextSection = styled.View`
  margin-top: 42px;
  align-items: center;
`;

export const Percent = styled.Text`
  font-size: 60px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY800};
`;

export const Size = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY800};
`;
