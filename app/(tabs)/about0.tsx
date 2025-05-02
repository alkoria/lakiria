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
          style={[styles.imgheader]}
          resizeMode="stretch"
        />
      }
    >
      <View style={[styles.container]}>
        <ThemedView style={{ marginBottom: 10 }}>
          <ThemedText type="title">Скилы</ThemedText>
        </ThemedView>
      </View>

      <View style={[styles.box]}>
        <View style={[styles.marg]}>
          <Collapsible
            title={
              <ThemedText style={[{ fontFamily: "SpaceMono-Regular" }]}>
                Windows
              </ThemedText>
            }
           
          >
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              Про Windows
            </ThemedText>
          </Collapsible>
        </View>

        <View style={[styles.marg]}>
          {" "}
          <Collapsible
            title={
              <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
                Linux
              </ThemedText>
            }
           
          >
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              Про Linux
            </ThemedText>
          </Collapsible>
        </View>

        <View style={[styles.marg]}>
          <Collapsible
            title={
              <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
                Linux
              </ThemedText>
            }
           
          >
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              Про Linux
            </ThemedText>
          </Collapsible>
        </View>

        <View style={[styles.marg]}>
          <Collapsible
            title={
              <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
                Linux
              </ThemedText>
            }
           
          >
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              Про Linux
            </ThemedText>
          </Collapsible>
        </View>

        <View style={[styles.marg]}>
          <Collapsible
            title={
              <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
                Linux
              </ThemedText>
            }
           
          >
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              Про Linux
            </ThemedText>
          </Collapsible>
        </View>

        <View style={[styles.marg]}>
          <Collapsible
            title={
              <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
                Linux
              </ThemedText>
            }
           
          >
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              Про Linux
            </ThemedText>
          </Collapsible>
        </View>

        <View style={[styles.marg]}>
          <Collapsible
            title={
              <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
                Linux
              </ThemedText>
            }
           
          >
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              Про Linux
            </ThemedText>
          </Collapsible>
        </View>

        <View style={[styles.marg]}>
          <Collapsible
            title={
              <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
                Linux
              </ThemedText>
            }
           
          >
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              Про Linux
            </ThemedText>
          </Collapsible>
        </View>

        <View style={[styles.marg]}>
          <Collapsible
            title={
              <ThemedText style={{ fontFamily: "SpaceMono-Regular" }}>
                Linux
              </ThemedText>
            }
           
          >
            <ThemedText style={{ fontFamily: "SpaceMono" }}>
              Про Linux
            </ThemedText>
          </Collapsible>
        </View>
      </View>

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
  imgheader: {
    height: "100%",
    width: "100%",
  },
  container: {
    flex: 1, // Занимает всё доступное пространство
    alignItems: "center", // Выравнивание по центру по горизонтали
    // alignItems: "stretch", // Растягиваем элементы по ширине
    justifyContent: "center", // Выравнивание по центру по вертикали
    padding: 20, // Добавляем отступы
    gap: 10, // Расстояние между элементами
  },
  box: {
    width: "100%", // Ширина контейнера
    // width: "45%",  // Ширина контейнера
    // maxWidth: 600, // Максимальная ширина
    // margin: 500, // Отступы между элементами
    alignSelf: "center", // Центрируем контейнер
    flexDirection: "row", // Горизонтальное расположение
    flexWrap: "wrap", // Перенос на новую строку при необходимости
    justifyContent: "center", // Выравнивание по центру
  },
  // marg: { margin: "5%" }, // Отступы между элементами
  marg: { margin: 50 }, // Отступы между элементами
  // container: {
  //   flex: 1,
  //   height: "100%",
  //   width: "100%",
  //   marginTop: 0,
  //   flexDirection: "row", // Горизонтальное расположение
  //   flexWrap: "wrap", // Перенос на новую строку
  //   justifyContent: "center", // Выравнивание по центру
  //   minHeight: 200,
  // },
  // box: {
  //   width: 150,
  //   height: 150,
  //   margin: 50, // Отступ между квадратами
  // },
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
