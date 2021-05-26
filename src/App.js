/**
 *
 * Main app
 *
 * App Name:          React Native Boiler Plate with Firebase
 * Author:            Muhammad Waseem
 *
 * @since             1.0.0
 *
 * @format
 * @flow
 */

import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import AppRouter from './routes/AppRouter';
import {colors} from './config';

const theme = {
  ...DefaultTheme,
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    primary: colors.primary,
    accent: colors.accent,
  },
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <AppRouter />
    </PaperProvider>
  );
};

export default App;
