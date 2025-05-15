import React, { useState } from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import type { PropsWithChildren } from "react";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
const AlignItemsLayout = () => {
  const [alignItems, setAlignItems] = useState("center"); // Начальное значение
  const colorScheme = useColorScheme(); // Текущая тема
  const router = useRouter();
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
          style={[styles.container, styles.reactLogo]}
          resizeMode="stretch"
        />
      }
    >
      <PreviewLayout
        label="Меню"
        selectedValue={alignItems}
        values={["flex-start", "center", "flex-end"]} // Только три варианта
        setSelectedValue={setAlignItems}
        colorScheme={colorScheme} // Передаем текущую тему в PreviewLayout
      >
        {/* Квадраты */}
        {/* <View>
          <View style={[styles.box, { backgroundColor: "powderblue" }]} />
          <View style={[styles.box, { backgroundColor: "skyblue" }]} />
          <View style={[styles.box, { backgroundColor: "steelblue" }]} />
        </View> */}

        <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        >
          {/* <Text
            style={{
              color: "#00ff00",
              textAlign: "center",
              textShadowColor: "red",
              // textShadowOffset: { width: 0.5, height: 0.5 },
              textShadowRadius: 2,
            }}
          ></Text> */}

          {/* <Image
            source={{
              uri: `https://i.postimg.cc/hz0pMTrV/linux.png`,
            }}
            style={{ width: "100%", height: "100%" }}
            onError={(error) =>
              console.log("Ошибка загрузки изображения:", error.nativeEvent)
            }
          /> */}

          <TouchableOpacity
            onPress={() => router.push("/os/linux")} // Переход на экран os/linux
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              source={{
                uri: "https://i.postimg.cc/hz0pMTrV/linux.png",
              }}
              style={{ width: "100%", height: "100%" }}
              onError={(error) =>
                console.log("Ошибка загрузки изображения:", error.nativeEvent)
              }
            />
          </TouchableOpacity>

          {/* <img
            src="https://i.postimg.cc/rp1Ptd18/Screenshot-20250326-005428-edit-105518724999523.jpg"
            alt="Screenshot-20250326-005428-edit-105518724999523"
          /> */}
        </View>

        <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => router.push("/os/windows")} // Переход на экран os/linux
            style={{ width: "100%", height: "100%" }}
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
          </TouchableOpacity>

          {/* <img
            src="https://i.postimg.cc/W4Ly3mJW/Screenshot-20250326-005541-edit-105555122953163.jpg"
            alt="Screenshot-20250326-005541-edit-105555122953163"
          /> */}
        </View>
        <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        >
          <TouchableOpacity
            onPress={() => router.push("/menu")} // Переход на экран os/linux
            style={{ width: "100%", height: "100%" }}
          >
            <Image
              source={{
                uri: `https://i.postimg.cc/KcLDCcbf/ssh.png`,
              }}
              style={{ width: "100%", height: "100%" }}
              onError={(error) =>
                console.log("Ошибка загрузки изображения:", error.nativeEvent)
              }
            />
          </TouchableOpacity>
        </View>
        {/* <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        > */}

        {/* <img
            src="https://i.postimg.cc/mDVp80pJ/Screenshot-20250326-005441-edit-105492386319318.jpg"
            alt="Screenshot-20250326-005441-edit-105492386319318"
          /> */}
        {/* <Image
            source={{
              uri: `https://i.postimg.cc/mDVp80pJ/Screenshot-20250326-005441-edit-105492386319318.jpg`,
            }}
            style={{ width: "100%", height: "100%" }}
            onError={(error) =>
              console.log("Ошибка загрузки изображения:", error.nativeEvent)
            }
          /> */}
        {/* </View> */}

        {/* <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        > */}

        {/* <img
            src="https://i.postimg.cc/26CXdzGn/Screenshot-20250326-005454-edit-105466726359426.jpg"
            alt="Screenshot-20250326-005454-edit-105466726359426"
          /> */}
        {/* <Image
            source={{
              uri: `https://i.postimg.cc/26CXdzGn/Screenshot-20250326-005454-edit-105466726359426.jpg`,
            }}
            style={{ width: "100%", height: "100%" }}
            onError={(error) =>
              console.log("Ошибка загрузки изображения:", error.nativeEvent)
            }
          /> */}

        {/* </View> */}

        {/* <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        > */}

        {/* <img
            src="https://i.postimg.cc/ZnR7gV1R/Screenshot-20250326-005506-edit-105393628144854.jpg"
            alt="Screenshot-20250326-005506-edit-105393628144854"
          /> */}

        {/* <Image
            source={{
              uri: `https://i.postimg.cc/ZnR7gV1R/Screenshot-20250326-005506-edit-105393628144854.jpg`,
            }}
            style={{ width: "100%", height: "100%" }}
            onError={(error) =>
              console.log("Ошибка загрузки изображения:", error.nativeEvent)
            }
          /> */}

        {/* </View> */}

        {/* <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        > */}

        {/* <img
            src="https://i.postimg.cc/6qmjNCXh/Screenshot-20250326-005520.jpg"
            alt="Screenshot-20250326-005520"
          /> */}

        {/* <Image
            source={{
              uri: `https://i.postimg.cc/6qmjNCXh/Screenshot-20250326-005520.jpg`,
            }}
            style={{ width: "100%", height: "100%" }}
            onError={(error) =>
              console.log("Ошибка загрузки изображения:", error.nativeEvent)
            }
          /> */}

        {/* </View> */}

        {/* <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        /> */}

        {/* <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        /> */}

        {/* <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        /> */}

        {/* <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        /> */}

        {/* <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        /> */}

        {/* <View
          style={[
            styles.box,
            {
              backgroundColor: colorScheme === "dark" ? "#000582" : "#eceff8",
            },
          ]}
        /> */}
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

    {/* Кнопки для выбора alignItems */}
    {/* <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[styles.button, selectedValue === value && styles.selected]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View> */}

    {/* ЕСЛИ ТРЕБУЮТСЯ КНОПКИ ЭТО ВЫБЕРЕТ ИХ РЕЖИМ И ВКЛЮЧИТ */}
    {/* alignItems: "flex-start", "center", "flex-end"  */}
    {/* alignItems: selectedValue */}
    {/* Контейнер с квадратами */}
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
