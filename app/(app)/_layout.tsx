import type { ReactNode } from 'react';
import { Stack } from 'expo-router';

export default function AuthLayout(): ReactNode {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
    </Stack>
  );
}