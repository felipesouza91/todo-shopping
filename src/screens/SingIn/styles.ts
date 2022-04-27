import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 24px;
`;

export const Header = styled.View`
  align-items: center;
  margin-bottom: 32px;
`;
export const Title = styled.Text`
  font-size: 35px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PURPLE};
`;
export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PURPLE};
`;

export const Input = styled.TextInput`
  padding: 20px 10px;
  background-color: ${({ theme }) => theme.COLORS.GRAY50};
  border-radius: 7px;
  margin-bottom: 10px;
`;
export const Account = styled.View`
  width: 100%;
  margin-top: 32px;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;
