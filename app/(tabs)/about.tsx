import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  StatusBar,
  Image,
  Platform,
} from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "@/hooks/useColorScheme";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { Collapsible } from "@/components/Collapsible";
import { ThemedView } from "@/components/ThemedView";
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
const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"],
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"],
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"],
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"],
  },
];
const AlignItemsLayout = () => {
  const [alignItems, setAlignItems] = useState("center"); // Начальное значение
  const colorScheme = useColorScheme(); // Текущая тема
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
      <ThemedView style={styles.titleContainer}>
              <ThemedText  type="title">Мои скилы</ThemedText>
            </ThemedView>
      <Collapsible
        title={
          <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
            Windows
          </ThemedText>
        }
      >
        <ThemedText style={{ fontFamily: "SpaceMono" }}>Про Windows</ThemedText>

        {/* <ThemedText>
                Текст <ThemedText type="defaultSemiBold">Текст 13</ThemedText> Текст{" "}
              </ThemedText> */}

        {/* <ExternalLink href="https://lakiria.ru">
                <ThemedText type="link">Текст 15</ThemedText>
              </ExternalLink> */}
      </Collapsible>
      <Collapsible
        title={
          <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
            Linux
          </ThemedText>
        }
      >
        <ThemedText style={{ fontFamily: "SpaceMono" }}>Про Linux</ThemedText>

        {/* <ThemedText>
                Текст <ThemedText type="defaultSemiBold">Текст 13</ThemedText> Текст{" "}
              </ThemedText> */}

        {/* <ExternalLink href="https://lakiria.ru">
                <ThemedText type="link">Текст 15</ThemedText>
              </ExternalLink> */}
      </Collapsible>
      {/* <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <View
            style={[
              styles.item,
              {
                backgroundColor:
                  colorScheme === "dark"
                    ? "rgba(0, 7, 133, 0.2)"
                    : "rgba(100, 206, 247,0.2)",
              },
            ]}
          >
           
            <Text
              style={[
                styles.title,
                { color: colorScheme === "dark" ? "white" : "black" },
              ]}
            >
              {item}
            </Text>
          </View>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text
            style={[
              styles.header,
              { color: colorScheme === "dark" ? "white" : "black" },
              {
                backgroundColor:
                  colorScheme === "dark"
                    ? "rgba(0, 7, 133, 0.2)"
                    : "rgba(100, 206, 247,0.3)",
              },
            ]}
          >
            {title}
          </Text>
        )}
      /> */}
    </ParallaxScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    marginTop: 0,
    flexDirection: "row", // Горизонтальное расположение
    flexWrap: "wrap", // Перенос на новую строку
    justifyContent: "center", // Выравнивание по центру
    minHeight: 200,
  },
  item: {
    // backgroundColor: "#9624bf",
    // backgroundColor: "#e7edf9",
    padding: 20,
    marginVertical: 8,
    // opacity: 0.2,
  },
  header: {
    fontSize: 32,
    // backgroundColor: "#dfebfb",
    // opacity: 0.5,
    textAlign: "center", // Выравнивание по центру
  },
  title: {
    fontSize: 24,
    textAlign: "center", // Выравнивание по центру
  },
});
export default AlignItemsLayout;
// export default App;
