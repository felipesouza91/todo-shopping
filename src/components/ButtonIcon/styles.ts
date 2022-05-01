import styled from 'styled-components/native';

interface IContainerProps {
  color: 'success' | 'alert';
  size?: 'small' | 'large';
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  width: ${({ size }) => (size === 'small' ? 40 : 60)}px;
  height: ${({ size }) => (size === 'small' ? 40 : 60)}px;
  background-color: ${({ color, theme }) =>
    color == 'success' ? theme.COLORS.GREEN : theme.COLORS.RED};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;
