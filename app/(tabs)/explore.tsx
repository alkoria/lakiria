import { StyleSheet, Image, Platform } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      // lakiria-logo-red.png
      headerImage={
        // <IconSymbol
        //   size={310}
        //   color="#808080"
        //   name="chevron.left.forwardslash.chevron.right"
        //   style={styles.headerImage}
        // />
        <Image
          source={require("@/assets/images/lakiria-logo-red.png")}
          style={[styles.container, styles.reactLogo]}
          resizeMode="stretch"
        />
      }
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Содержание</ThemedText>
      </ThemedView>
      <ThemedText>Весь список:</ThemedText>
      <Collapsible title="Пункт №1">
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
      </Collapsible>
      <Collapsible title="Пункт №2">
        <ThemedText>
          Текст 6 <ThemedText type="defaultSemiBold">Текст 7</ThemedText> Текст
          8
        </ThemedText>
      </Collapsible>
      <Collapsible title="Пункт №3">
        <ThemedText>
          Текст 9 <ThemedText type="defaultSemiBold">Текст 10</ThemedText> Текст
          11 <ThemedText type="defaultSemiBold">Текст 12</ThemedText> Текст 13
        </ThemedText>
        <Image
          source={require("@/assets/images/lakiria-logo-white.png")}
          style={{ alignSelf: "center", height: 178, width: 290 }}
        />
        <ExternalLink href="https://lakiria.ru">
          <ThemedText type="link">Новое окно</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Пункт №4">
        <ThemedText>
          Текст <ThemedText type="defaultSemiBold">Текст 13</ThemedText> Текст{" "}
          <ThemedText style={{ fontFamily: "SpaceMono" }}>Текст 14</ThemedText>
        </ThemedText>
        <ExternalLink href="https://lakiria.ru">
          <ThemedText type="link">Текст 15</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Пункт №5">
        <ThemedText>
          Текст 16 <ThemedText type="defaultSemiBold">Текст</ThemedText> Текст
        </ThemedText>
        <ExternalLink href="https://lakiria.ru">
          <ThemedText type="link">Learn more</ThemedText>
        </ExternalLink>
      </Collapsible>
      <Collapsible title="Пункт №6">
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
      </Collapsible>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    opacity: 0.8,
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
