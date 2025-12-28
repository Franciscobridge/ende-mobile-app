import { useAppFonts } from "@/hooks/useAppFonts";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "../../global.css";

// 👇 OBRIGATÓRIO
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const fontsLoaded = useAppFonts();

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="(onboarding)/index"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(onboarding)/verifyContract"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(onboarding)/scannerBarCode"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(onboarding)/createPassword"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="auth/login"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="(with-login)/home/index"
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
