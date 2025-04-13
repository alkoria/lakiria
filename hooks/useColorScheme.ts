import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

let currentScheme: "dark" | "light"; // Глобальная переменная для хранения текущей темы
const listeners: (() => void)[] = []; // Массив подписчиков

// Загрузка темы из AsyncStorage
const loadScheme = async (): Promise<"dark" | "light"> => {
  try {
    const savedScheme = await AsyncStorage.getItem("theme");
    return savedScheme === "dark" || savedScheme === "light" ? savedScheme : "light";
  } catch (error) {
    console.error("Ошибка загрузки темы:", error);
    return "light"; // Возвращаем светлую тему по умолчанию
  }
};

// Сохранение темы в AsyncStorage
const saveScheme = async (scheme: "dark" | "light") => {
  try {
    await AsyncStorage.setItem("theme", scheme);
  } catch (error) {
    console.error("Ошибка сохранения темы:", error);
  }
};

// Хук для получения текущей темы
export function useColorScheme(): "dark" | "light" {
  const [scheme, setScheme] = useState<"dark" | "light">("light"); // Локальное состояние темы

  useEffect(() => {
    // Загружаем сохранённую тему при монтировании компонента
    loadScheme().then((loadedScheme) => {
      currentScheme = loadedScheme; // Обновляем глобальную переменную
      setScheme(currentScheme); // Устанавливаем локальное состояние
    });

    // Добавляем подписчика при монтировании компонента
    listeners.push(() => setScheme(currentScheme));

    // Удаляем подписчика при размонтировании
    return () => {
      const index = listeners.indexOf(() => setScheme(currentScheme));
      if (index !== -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return scheme; // Возвращаем текущее значение темы
}

// Хук для переключения темы
export function useToggleColorScheme() {
  const toggleColorScheme = async () => {
    const newScheme = currentScheme === "dark" ? "light" : "dark";
    currentScheme = newScheme; // Обновляем глобальную переменную

    // Сохраняем новую тему
    await saveScheme(newScheme);

    // Уведомляем всех подписчиков об изменении темы
    listeners.forEach((listener) => listener());
  };

  return toggleColorScheme; // Возвращаем функцию для переключения темы
}



// import { useColorScheme } from "react-native";

// export { useColorScheme } from "react-native";

// export function useColorScheme(): 'dark' {
//   return 'dark'; // Всегда возвращает 'dark'
// }

// export function useColorScheme(): "dark" | "light" {
//   return "light"; // Всегда возвращает 'light'
// }
// import { useState, useEffect } from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// let currentScheme: 'dark' | 'light'; // Глобальная переменная для хранения текущей темы
// const listeners: (() => void)[] = []; // Массив подписчиков

// // Загрузка темы из AsyncStorage
// const loadScheme = async () => {
//   const savedScheme = await AsyncStorage.getItem('theme');
//   return savedScheme === 'dark' || savedScheme === 'light' ? savedScheme : 'dark';
// };

// // Сохранение темы в AsyncStorage
// const saveScheme = async (scheme: 'dark' | 'light') => {
//   await AsyncStorage.setItem('theme', scheme);
// };

// export function useColorScheme(): 'dark' | 'light' {
//   const [scheme, setScheme] = useState<'dark' | 'light'>('dark'); // Локальное состояние темы

//   useEffect(() => {
//     // Загружаем сохранённую тему при монтировании компонента
//     loadScheme().then((loadedScheme) => {
//       currentScheme = loadedScheme as 'dark' | 'light';
//       setScheme(currentScheme);
//     });

//     // Добавляем подписчика при монтировании компонента
//     listeners.push(() => setScheme(currentScheme));

//     // Удаляем подписчика при размонтировании
//     return () => {
//       const index = listeners.indexOf(() => setScheme(currentScheme));
//       if (index !== -1) {
//         listeners.splice(index, 1);
//       }
//     };
//   }, []);

//   return scheme; // Возвращаем текущее значение темы
// }

// // Хук для переключения темы
// export function useToggleColorScheme() {
//   const toggleColorScheme = async () => {
//     const newScheme = currentScheme === 'dark' ? 'light' : 'dark';
//     currentScheme = newScheme; // Обновляем глобальную переменную

//     // Сохраняем новую тему
//     await saveScheme(newScheme);

//     // Уведомляем всех подписчиков об изменении темы
//     listeners.forEach((listener) => listener());
//   };

//   return toggleColorScheme; // Возвращаем функцию для переключения темы
// }

// import { useState, useEffect } from "react";
// import AsyncStorage from '@react-native-async-storage/async-storage';

// let currentScheme: 'dark' | 'light'; // Глобальная переменная для хранения текущей темы
// const listeners: (() => void)[] = []; // Массив подписчиков

// // Загрузка темы из localStorage или AsyncStorage
// const loadScheme = async () => {
//   if (typeof window !== 'undefined') {
//     // Для Web используем localStorage
//     const savedScheme = window.localStorage.getItem('theme');
//     return savedScheme === 'dark' || savedScheme === 'light' ? savedScheme : 'dark';
//   } else {
//     // Для мобильных платформ используем AsyncStorage
//     const savedScheme = await AsyncStorage.getItem('theme');
//     return savedScheme === 'dark' || savedScheme === 'light' ? savedScheme : 'dark';
//   }
// };

// // Сохранение темы в localStorage или AsyncStorage
// const saveScheme = async (scheme: 'dark' | 'light') => {
//   if (typeof window !== 'undefined') {
//     // Для Web
//     window.localStorage.setItem('theme', scheme);
//   } else {
//     // Для мобильных платформ
//     await AsyncStorage.setItem('theme', scheme);
//   }
// };

// export function useColorScheme(): 'dark' | 'light' {
//   const [scheme, setScheme] = useState<'dark' | 'light'>('dark'); // Локальное состояние темы

//   useEffect(() => {
//     // Загружаем сохранённую тему при монтировании компонента
//     loadScheme().then((loadedScheme) => {
//       currentScheme = loadedScheme as 'dark' | 'light';
//       setScheme(currentScheme);
//     });

//     // Добавляем подписчика при монтировании компонента
//     listeners.push(() => setScheme(currentScheme));

//     // Удаляем подписчика при размонтировании
//     return () => {
//       const index = listeners.indexOf(() => setScheme(currentScheme));
//       if (index !== -1) {
//         listeners.splice(index, 1);
//       }
//     };
//   }, []);

//   return scheme; // Возвращаем текущее значение темы (строка)
// }

// // Хук для переключения темы
// export function useToggleColorScheme() {
//   const toggleColorScheme = async () => {
//     const newScheme = currentScheme === 'dark' ? 'light' : 'dark';
//     currentScheme = newScheme; // Обновляем глобальную переменную

//     // Сохраняем новую тему
//     await saveScheme(newScheme);

//     // Уведомляем всех подписчиков об изменении темы
//     listeners.forEach((listener) => listener());
//   };

//   return toggleColorScheme; // Возвращаем функцию для переключения темы
// }
/**
 * Использование кастомного статического значения
 */
// export function useColorScheme(): "dark" | "light" {
//   return "dark"; // Всегда возвращает "dark"
// }
/**
 * Использование автоматического перехода
 */
// export function useColorScheme() {
//   const [hasHydrated, setHasHydrated] = useState(false);

//   useEffect(() => {
//     setHasHydrated(true);
//   }, []);

//   const colorScheme = useRNColorScheme();

//   if (hasHydrated) {
//     return colorScheme;
//   }

//   return "light";
// }
