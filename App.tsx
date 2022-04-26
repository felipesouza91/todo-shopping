import { StatusBar } from 'expo-status-bar';
import React from 'react';
import styled from 'styled-components/native';

export default function App() {
  return (
    <StyledView>
      <StyledText>Hello World!</StyledText>
    </StyledView>
  );
}

const StyledView = styled.View`
  background-color: papayawhip;
`;

const StyledText = styled.Text`
  color: palevioletred;
`;
