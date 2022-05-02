import styled from 'styled-components/native';

export const Container = styled.View`
  margin-top: 10px;
  width: 100%;

  height: 110px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY50};
  border-radius: 5px;
`;

export const ItemBox = styled.View`
  margin-left: 15px;
  flex: 0.8;
`;
export const Description = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: 25px;
`;
export const Quantity = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: 15px;
  color: ${({ theme }) => theme.COLORS.GRAY900};
`;
export const Options = styled.View`
  justify-content: flex-start;
`;
