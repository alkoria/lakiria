import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import type { PropsWithChildren } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useColorScheme } from "@/hooks/useColorScheme";

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
      <PreviewLayout
        label="Windows"
        selectedValue={alignItems}
        values={["flex-start", "center", "flex-end"]} // Только три варианта
        setSelectedValue={setAlignItems}
        colorScheme={colorScheme} // Передаем текущую тему в PreviewLayout
      >
        <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        >
          <Image
            source={{
              uri: `https://i.postimg.cc/N9td1p1g/windows.png`,
            }}
            style={{ width: "100%", height: "100%" }}
            onError={(error) =>
              console.log("Ошибка загрузки изображения:", error.nativeEvent)
            }
          />
        </View>
      </PreviewLayout>
    </ParallaxScrollView>
  );
};

type PreviewLayoutProps = PropsWithChildren<{
  label: string;
  values: string[];
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  colorScheme: "dark" | "light"; // Добавляем пропс для текущей темы
}>;

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
  colorScheme, // Принять текущую тему
}: PreviewLayoutProps) => (
  <View style={{ padding: 0, flex: 1 }}>
    {/* Динамический цвет текста */}
    <Text
      style={[
        styles.label,
        { color: colorScheme === "dark" ? "white" : "black" }, // Цвет текста зависит от темы
      ]}
    >
      {label}
    </Text>

    <View style={[styles.container, { alignItems: "flex-start" }]}>
      {children}
    </View>
  </View>
);

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
  box: {
    width: 150,
    height: 150,
    margin: 50, // Отступ между квадратами
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "30%", // Уменьшаем ширину кнопок
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default AlignItemsLayout;
