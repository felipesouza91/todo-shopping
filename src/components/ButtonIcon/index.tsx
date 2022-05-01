import React from 'react';
import { Container } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacityProps } from 'react-native';
import { useTheme } from 'styled-components';

type IButtonIconProps = TouchableOpacityProps & {
  color?: 'success' | 'alert';
  size?: 'small' | 'large';
  icon?: React.ComponentProps<typeof MaterialIcons>['name'];
};

const ButtonIcon: React.FC<IButtonIconProps> = ({
  color = 'success',
  size = 'small',
  icon,
  ...rest
}) => {
  const theme = useTheme();
  return (
    <Container activeOpacity={0.8} color={color} size={size} {...rest}>
      <MaterialIcons
        name={icon}
        size={size === 'small' ? 18 : 24}
        color={theme.COLORS.WHITE}
      />
    </Container>
  );
};

export default ButtonIcon;
