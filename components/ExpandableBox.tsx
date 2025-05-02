import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from "react-native-reanimated";

interface ExpandableBoxProps {
  title: string; // Текст на кнопке
  content: string; // Текст внутри элемента
  screenWidth: number; // Ширина экрана
}

const ExpandableBox = ({ title, content, screenWidth }: ExpandableBoxProps) => {
  const widthAnimation = useSharedValue(0); // Начальная ширина
  const heightAnimation = useSharedValue(0); // Начальная высота
  const isExpanded = useSharedValue(false); // Состояние расширения

  const toggle = () => {
    if (isExpanded.value) {
      widthAnimation.value = 0; // Минимальная ширина
      heightAnimation.value = 0; // Минимальная высота
    } else {
      widthAnimation.value = screenWidth - 40; // Максимальная ширина с отступами
      heightAnimation.value = 400; // Максимальная высота
    }
    isExpanded.value = !isExpanded.value; // Переключаем состояние
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(widthAnimation.value, { duration: 800 }), // Анимация ширины
      height: withTiming(heightAnimation.value, { duration: 800 }), // Анимация высоты
    };
  });
  const colorScheme = useColorScheme(); // Текущая тема
  return (
    <View style={styles.container}>
      {/* Раскрывающийся элемент с текстом */}
      <Animated.View
        style={[
          styles.box,
          animatedStyle,
          { backgroundColor: colorScheme === "dark" ? "#000582" : "#9fd5fa" },
        ]}
      >
        <Text style={[styles.text, { color: colorScheme === "dark" ? "#fff" : "#000" }]}>{content}</Text>
      </Animated.View>

      {/* Кнопка для запуска анимации */}
      <Button
        title={title}
        color={colorScheme === "dark" ? "#000582" : "#9fd5fa"}
        onPress={toggle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5, // Отступ между элементами
  },
  box: {
    // backgroundColor: "#fff", // Цвет фона
    justifyContent: "center", // Выравнивание текста по центру
    alignItems: "center", // Горизонтальное выравнивание текста
    overflow: "hidden", // Обрезание содержимого за пределами элемента
    borderWidth: 0, // Граница для наглядности
    borderColor: "#ccc", // Цвет границы
    padding: 0, // Внутренние отступы
  },
  text: {
    fontSize: 16, // Размер текста
    // color: "#333", // Цвет текста
    textAlign: "center", // Выравнивание текста по центру
  },
});

export default ExpandableBox;
