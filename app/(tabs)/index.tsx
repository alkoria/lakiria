import { View, Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";

import ThemeToggler from "@/components/ThemeToggler";

function PlatformText({ children }) {
  return (
    <ThemedText>
      {children}{" "}
      <ThemedText type="defaultSemiBold">
        {Platform.select({
          ios: "iOS",
          android: "Android",
          web: "Web",
        })}
      </ThemedText>
    </ThemedText>
  );
}

export default function HomeScreen() {
  const colorScheme = useColorScheme();
  console.log("index color scheme: ", colorScheme);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A3A1DC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={
            colorScheme === "dark"
              ? require("@/assets/images/lakiria-logo-black.png") // Темная тема
              : require("@/assets/images/lakiria-logo-white.png") // Светлая тема
          }
          style={[styles.container, styles.reactLogo]}
          resizeMode="stretch"
        />
      }
    >
      <ThemedView style={[styles.titleContainer]}>
        <ThemedText type="title"></ThemedText>
      </ThemedView>
      <ThemedView style={[styles.centerContainer, styles.stepContainer]}>
        <ThemedText type="subtitle">-----------------------------</ThemedText>
        <ThemeToggler />
        <ThemedText type="subtitle">-----------------------------</ThemedText>
        <HelloWave />
        <ThemedText type="subtitle">-----------------------------</ThemedText>
        <PlatformText>Вы используете версию</PlatformText>
        <ThemedText type="subtitle">-----------------------------</ThemedText>
        <ThemedText>Текущая тема: {colorScheme} </ThemedText>
        <ThemedText type="subtitle">-----------------------------</ThemedText>
        <ThemedText type="subtitle"></ThemedText>
        <ThemedText type="subtitle">-----------------------------</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  centerContainer: {
    alignItems: "center", // Центрирует по горизонтали
    justifyContent: "center", // Опционально: центрирует по вертикали
  },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    // opacity: colorScheme === 'dark' ? 0.9 : 0.8,
    opacity: 0.8,
    overflow: "hidden",
    // backgroundColor: colorScheme === 'dark' ? '#1D3D47' : '#A3A1DC',
    backgroundColor: "#A3A1DC",
    borderRadius: 0,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  reactLogo: {
    //resizeMode: 'cover',
  },
});
