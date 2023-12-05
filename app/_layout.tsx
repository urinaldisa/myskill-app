import type {ReactNode} from 'react';
import {Slot} from 'expo-router';
import { ThemeProvider } from 'react-native-magnus';
import { RecoilRoot } from 'recoil';

export default function RootLayout(): ReactNode {
  return (
    <ThemeProvider>
        <RecoilRoot>
      <Slot />
        </RecoilRoot>
    </ThemeProvider>
  );
}