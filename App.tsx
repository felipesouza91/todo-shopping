import React from 'react';
import { ThemeProvider } from 'styled-components';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import theme from './src/theme';
import Routes from './src/routes';

export default function App() {
  const [loaded] = useFonts({ Roboto_400Regular, Roboto_500Medium });

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Routes />
    </ThemeProvider>
  );
}
