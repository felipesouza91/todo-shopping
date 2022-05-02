import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons } from '@expo/vector-icons';
import Products from '../screens/Products';
import Receipts from '../screens/Receipts';
import Upload from '../screens/Upload';
import { useTheme } from 'styled-components';

const { Navigator, Screen } = createBottomTabNavigator();
const AppRoutes: React.FC = () => {
  const theme = useTheme();
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 75,
        },
        tabBarLabelStyle: {
          fontFamily: theme.FONTS.REGULAR,
        },
        tabBarInactiveTintColor: theme.COLORS.GRAY800,
        tabBarActiveTintColor: theme.COLORS.PURPLE,
      }}
    >
      <Screen
        name="Produtos"
        component={Products}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="shopping-cart"
              size={22}
              color={focused ? theme.COLORS.PURPLE : color}
            />
          ),
        }}
      />
      <Screen
        name="Comprovantes"
        component={Receipts}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="receipt"
              size={22}
              color={focused ? theme.COLORS.PURPLE : color}
            />
          ),
        }}
      />
      <Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialIcons
              name="backup"
              size={22}
              color={focused ? theme.COLORS.PURPLE : color}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default AppRoutes;
