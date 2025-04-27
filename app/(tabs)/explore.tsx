import {
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { router } from "expo-router";
import { IconSymbol } from "@/components/ui/IconSymbol";
export default function TabTwoScreen() {
  const [alignItems, setAlignItems] = useState("center"); // Начальное значение
  const colorScheme = useColorScheme(); // Текущая тема

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A3A1DC", dark: "#1D3D47" }}
      // lakiria-logo-red.png
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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Содержание</ThemedText>
      </ThemedView>

      {/* <Collapsible title="Пункт первый"> */}

      <TouchableOpacity
        onPress={() => router.push("/about")} // Переход на экран os/linux
        style={{ width: "100%", height: "100%" }}
      >
        {/* <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
          Обо мне...
        </ThemedText> */}
        <View>
          <ThemedText
            style={[styles.text, { fontFamily: "SpaceMono-Regular" }]}
          >
            <IconSymbol size={20} name="arrowright" color={colorScheme}/>
             Обо мне 
            <IconSymbol size={20} name="arrowleft" color={colorScheme}/>
          </ThemedText>
        </View>
      </TouchableOpacity>

      <Collapsible
        title={
          <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
            Пункт первый.
          </ThemedText>
        }
      >
        <ThemedText style={{ fontFamily: "SpaceMono" }}>Текст 14</ThemedText>

        {/* <ThemedText>
          Текст <ThemedText type="defaultSemiBold">Текст 13</ThemedText> Текст{" "}
        </ThemedText> */}

        {/* <ExternalLink href="https://lakiria.ru">
          <ThemedText type="link">Текст 15</ThemedText>
        </ExternalLink> */}
      </Collapsible>

      {/* <ThemedText>Весь список:</ThemedText> */}

      {/* <Collapsible title="Пункт №1">
        <ThemedText>
          Текст 0 <ThemedText type="defaultSemiBold">Текст 1</ThemedText> и/или{" "}
          <ThemedText type="defaultSemiBold">Текст 2</ThemedText>
        </ThemedText>
        <ThemedText>
          Текст 3 <ThemedText type="defaultSemiBold">Текст 4</ThemedText> Текст
          5
        </ThemedText>
        <ExternalLink href="https://lakiria.ru">
          <ThemedText type="link">Назад на главную</ThemedText>
        </ExternalLink>
      </Collapsible> */}

      {/* <Collapsible title="Пункт №2">
        <ThemedText>
          Текст 6 <ThemedText type="defaultSemiBold">Текст 7</ThemedText> Текст
          8
        </ThemedText>
      </Collapsible> */}

      {/* <Collapsible title="Пункт №3"> */}

      {/* <ThemedText>
          Текст 9 <ThemedText type="defaultSemiBold">Текст 10</ThemedText> Текст
          11 <ThemedText type="defaultSemiBold">Текст 12</ThemedText> Текст 13
        </ThemedText> */}

      {/* <Image
          source={require("@/assets/images/lakiria-logo-white.png")}
          style={{
            resizeMode: "stretch",
            alignSelf: "center",
            height: 178,
            width: 290,
          }}
        /> */}

      {/* <Image
          source={{
            uri: `https://i.postimg.cc/QxG76WTp/lakiria-logo-blue-rm.png`,
          }}
          style={{ width: "100%", height: "100%" }}
          onError={(error) =>
            console.log("Ошибка загрузки изображения:", error.nativeEvent)
          }
        /> */}

      {/* <Image
          source={{
            uri: `https://i.postimg.cc/BZ1DcCXS/lakiria-logo-black-rm.png`,
          }}
          style={{ width: "100%", height: "100%" }}
          onError={(error) =>
            console.log("Ошибка загрузки изображения:", error.nativeEvent)
          }
        /> */}
      {/* <img
          src="https://i.postimg.cc/QxG76WTp/lakiria-logo-blue-rm.png"
          alt="lakiria-logo-blue-rm"
        />
        <img
          src="https://i.postimg.cc/BZ1DcCXS/lakiria-logo-black-rm.png"
          alt="lakiria-logo-black-rm"
        /> */}

      {/* <ExternalLink href="https://lakiria.ru">
          <ThemedText type="link">Новое окно</ThemedText>
        </ExternalLink> */}

      {/* </Collapsible> */}

      {/* <Collapsible title="Пункт №4">
        <ThemedText>
          Текст <ThemedText type="defaultSemiBold">Текст 13</ThemedText> Текст{" "}
          <ThemedText style={{ fontFamily: "SpaceMono" }}>Текст 14</ThemedText>
        </ThemedText>
        <ExternalLink href="https://lakiria.ru">
          <ThemedText type="link">Текст 15</ThemedText>
        </ExternalLink>
      </Collapsible> */}

      {/* <Collapsible title="Пункт №5">
        <ThemedText>
          Текст 16 <ThemedText type="defaultSemiBold">Текст</ThemedText> Текст
        </ThemedText>
        <ExternalLink href="https://lakiria.ru">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible> */}

      {/* <Collapsible title="Пункт №6">
        <ThemedText>
          Текст <ThemedText type="defaultSemiBold">Текст</ThemedText> Текст{" "}
          <ThemedText type="defaultSemiBold">Текст</ThemedText> Текст
        </ThemedText>
        {Platform.select({
          ios: (
            <ThemedText>
              Текст <ThemedText type="defaultSemiBold"></ThemedText> Текст
            </ThemedText>
          ),
        })}
      </Collapsible> */}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    // color: "#808080",
    // bottom: -90,
    // left: -35,
    // position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  reactLogo: {
    //resizeMode: 'cover',
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
});
