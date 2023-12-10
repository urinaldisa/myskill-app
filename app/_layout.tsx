import type { ReactNode } from 'react';
import { Slot } from 'expo-router';
import { ThemeProvider } from 'react-native-magnus';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AuthProvider } from '../src/providers/Auth';

export default function RootLayout(): ReactNode {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Slot />
          </AuthProvider>
        </QueryClientProvider>
      </RecoilRoot>
    </ThemeProvider>
  );
}