import React from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import {
  useColorScheme,
  useToggleColorScheme,
} from "@/hooks/useColorScheme";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";
export default function ThemeToggler() {
  const scheme = useColorScheme(); // Текущая тема
  const toggleColorScheme = useToggleColorScheme(); // Функция для переключения темы

  return (
    <TouchableOpacity
      onPress={toggleColorScheme}
      style={[
        styles.button,
        { backgroundColor: scheme === "dark" ? "#151718" : "#fff" },
        { cursor: "pointer" },
        { alignItems: "center" },
        {justifyContent: "center"}
      ]}
    >
      {/* <Text style={styles.text}>
        {scheme === "dark" ? "Светлая тема" : "Тёмная тема"}
      </Text> */}

      {/* <MaterialCommunityIcons name="theme-light-dark" size={24} color="black" /> */}

      <Ionicons
        name={scheme === "dark" ? "sunny-outline" : "moon-outline"}
        size={Platform.OS === "ios" ? 22 : 25}
        color={scheme === "dark" ? "gold" : "blue"}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // padding: 8,
    // borderRadius: 10,
    // backgroundColor: "ivory",
    // marginVertical: 0,
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});
