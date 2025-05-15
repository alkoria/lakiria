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
          web: "браузер",
        })}
      </ThemedText>
    </ThemedText>
  );
}
const images = {
  darkLogo: "https://i.postimg.cc/W17cwJxt/ctrlf5.png ",
  lightLogo: "https://i.postimg.cc/7Z2PSVk4/ctrlf5white.png ",
};
export default function HomeScreen() {
  const colorScheme = useColorScheme();
  const t = colorScheme === "dark" ? "тёмную" : "светлую";
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A3A1DC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={
            colorScheme === "dark"
              ? require("@/assets/images/lakiria-logo-black-rm.png") // Темная тема
              : require("@/assets/images/lakiria-logo-white.png") // Светлая тема
          }
          style={[styles.container]}
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
        <PlatformText>Вход через </PlatformText>
        <ThemedText type="subtitle">-----------------------------</ThemedText>
        {/* <ThemedText>Текущая тема: {colorScheme} </ThemedText> */}
        <ThemedText>Используем {t} тему</ThemedText>
        <ThemedText type="subtitle">-----------------------------</ThemedText>

        <View style={[styles.box]}>
          {/* <Image
            source={
              colorScheme === "dark"
                ? { uri: "https://i.postimg.cc/W17cwJxt/ctrlf5.png " }
                : { uri: "https://i.postimg.cc/7Z2PSVk4/ctrlf5white.png " }
            }
            style={{ width: "100%", height: "100%" }}
            onError={(error) =>
              console.log("Ошибка загрузки изображения:", error.nativeEvent)
            }
          /> */}
          <Image
            source={
              colorScheme === "dark"
                ? { uri: images.darkLogo }
                : { uri: images.lightLogo }
            }
            style={{ width: "100%", height: "100%" }}
            onError={(error) =>
              console.log("Ошибка загрузки изображения:", error.nativeEvent)
            }
          />
        </View>
        <ThemedText>Для правильного отображения </ThemedText>
        <ThemedText>моего интерфейса.</ThemedText>

        <ThemedText type="subtitle">-----------------------------</ThemedText>
        <ThemedText type="subtitle"></ThemedText>
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
    opacity: 1,
    overflow: "hidden",
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
  box: {
    width: 150,
    height: 150,
    // margin: 50, // Отступ между квадратами
  },
});
