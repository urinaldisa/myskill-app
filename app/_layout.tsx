import type {ReactNode} from 'react';
import {Slot} from 'expo-router';
import { ThemeProvider } from 'react-native-magnus';

export default function RootLayout(): ReactNode {
  return (
    <ThemeProvider>
      <Slot />
    </ThemeProvider>
  );
}