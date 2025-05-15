import { useColorScheme } from "@/hooks/useColorScheme";
import React from "react";
import { View, Button, Text, StyleSheet, ScrollView } from "react-native";
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

  // const ExpandableBox = ({ title, content, screenWidth }) => {
  //   return (
  //     <View style={styles.container}>
  //       <Text style={styles.title}>{title}</Text>
  //       {/* Добавляем ScrollView для содержимого */}
  //       <ScrollView style={styles.scrollView}>
  //         <Text style={styles.content}>{content}</Text>
  //       </ScrollView>
  //     </View>
  //   );
  // };

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
  const boxBackgroundColor =
    colorScheme === "dark" ? "rgba(0, 5, 130,.4)" : "#9fd5fa";
  const textColor = colorScheme === "dark" ? "#fff" : "#000";
  return (
    <View style={styles.container}>
      {/* Кнопка для запуска анимации */}
      <Button
        title={title}
        // { backgroundColor: colorScheme === "dark" ? "#000582" : "#9fd5fa" },
        color={boxBackgroundColor}
        onPress={toggle}
      />
      {/* Раскрывающийся элемент с текстом */}
      <Animated.View
        style={[
          styles.box,
          animatedStyle,
          // { backgroundColor: colorScheme === "dark" ? "#000582" : "#9fd5fa" },
          {
            backgroundColor: boxBackgroundColor,
          },
        ]}
      >
        {" "}
        <ScrollView
          showsVerticalScrollIndicator={false} // Скрывает вертикальный ползунок
          showsHorizontalScrollIndicator={false} // Скрывает горизонтальный ползунок
        >
          <Text style={[styles.text, { color: textColor }]}>{content}</Text>
        </ScrollView>
      </Animated.View>
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
    flexGrow: 1, // Разрешить блоку расти по высоте
    borderWidth: 0, // Граница для наглядности
    borderColor: "#ccc", // Цвет границы
    padding: 0, // Внутренние отступы
    // borderRadius: "50%", // Закругление краёв
    borderTopLeftRadius: "2%", // Закругление краёв
    borderTopRightRadius: "2%", // Закругление краёв
    borderBottomLeftRadius: "2%", // Левый нижний уголок
    borderBottomRightRadius: "2%", // Правый нижний уголок
  },
  text: {
    fontSize: 16, // Размер текста
    // color: "#333", // Цвет текста
    textAlign: "center", // Выравнивание текста по центру
    textShadowColor: "#eeefff", // Цвет тени (например, amber-6)
    textShadowOffset: { width: 0, height: 0 }, // Смещение тени
    textShadowRadius: 20, // Радиус размытия тени
  },
});

export default ExpandableBox;
