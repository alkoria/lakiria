import React from "react";
import { View, Dimensions, Image, StyleSheet } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useColorScheme } from "@/hooks/useColorScheme";
import ExpandableBox from "@/components/ExpandableBox"; // Импортируем реиспользуемый компонент

export default function About() {
  const screenWidth = Dimensions.get("window").width; // Ширина экрана
  const colorScheme = useColorScheme(); // Текущая тема

  // Пример данных для кнопок
  const items = [
    {
      title: "WINDOWS",
      content:
        "Опыт работы с Windows",
    },
    {
      title: "LINUX",
      content:
        "Опыт работы с Linux",
    },
    {
      title: "ANDROID",
      content:
        "Опыт работы с ANDROID",
    },
    {
      title: "MACOS",
      content:
        "Опыт работы с MACOS",
    },
  ];

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
      {/* Рендерим все кнопки */}
      {items.map((item, index) => (
        <ExpandableBox
          key={index}
          title={item.title}
          content={item.content}
          screenWidth={screenWidth}
        />
      ))}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  imgheader: {
    height: "100%",
    width: "100%",
  },
});