import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useColorScheme, useToggleColorScheme } from "@/hooks/useColorScheme.web";

export default function ThemeToggler() {
  const scheme = useColorScheme(); // Текущая тема
  const toggleColorScheme = useToggleColorScheme(); // Функция для переключения темы

  return (
    <TouchableOpacity onPress={toggleColorScheme} style={styles.button}>
      <Text style={styles.text}>
        {scheme === "dark" ? "Светлая тема" : "Тёмная тема"}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 8,
    borderRadius: 4,
    backgroundColor: "gray",
    marginVertical: 16,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
});