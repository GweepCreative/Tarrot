/// <reference types="nativewind/types" />
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  useFonts,
  Montserrat_900Black,
  Montserrat_700Bold,
  Montserrat_600SemiBold,
  Montserrat_400Regular,
} from "@expo-google-fonts/montserrat";
import { DMSerifDisplay_400Regular } from "@expo-google-fonts/dm-serif-display";
import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "@/components/AnimatedSplashScreen/index";
import { StatusBar } from "expo-status-bar";
import NetInfo from "@react-native-community/netinfo";
import NoConnection from "@/components/NoConnection";

// SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationFinished, setSplashAnimationFinished] = useState(false);

  const [isConnected, setIsConnected] = useState<boolean | null>(false);

  const [fontLoaded, fonterr] = useFonts({
    Montserrat: Montserrat_400Regular,
    MontserratSemi: Montserrat_600SemiBold,
    MontserratBold: Montserrat_700Bold,
    MontserratBlack: Montserrat_900Black,
    DMSerifDisplay: DMSerifDisplay_400Regular,
  });

  useEffect(() => {
    NetInfo.fetch().then((state) => {
      setIsConnected(state.isConnected);
    });
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    if (fontLoaded || fonterr) {
      SplashScreen.hideAsync();
      setAppReady(true);
    }

    return () => {
      unsubscribe();
    };
  }, [fontLoaded, fonterr]);

  if (!isConnected) {
    return <NoConnection />;
  }
  if (!appReady || !splashAnimationFinished) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationFinished(true);
          }
        }}
      />
    );
  }

  return (
    <>
      <StatusBar style="light" hidden animated translucent />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="signup" />
        <Stack.Screen name="index" />
        <Stack.Screen name="horoscope" />
      </Stack>
    </>
  );
};

export default RootLayout;
