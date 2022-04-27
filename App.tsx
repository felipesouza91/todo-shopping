import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './src/theme';
import {
  Roboto_400Regular,
  Roboto_500Medium,
  useFonts,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import SignIn from './src/screens/SignIn';

export default function App() {
  const [loaded] = useFonts({ Roboto_400Regular, Roboto_500Medium });

  if (!loaded) {
    return <AppLoading />;
  }
  return (
    <ThemeProvider theme={theme}>
      <SignIn />
    </ThemeProvider>
  );
}
