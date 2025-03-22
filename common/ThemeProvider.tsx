// common/ThemeProvider.tsx

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from './themes';

type ThemeName = 'light' | 'dark';
type ThemeType = typeof lightTheme | typeof darkTheme;

type ThemeContextType = {
  name: ThemeName;
  theme: ThemeType;
  setTheme: (themeName: ThemeName) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  name: 'light',
  theme: lightTheme,
  setTheme: () => undefined,
});

export function ThemeProvider({ children }: React.PropsWithChildren) {
  const systemTheme = useColorScheme() ?? 'light';
  const [currentThemeName, setCurrentThemeName] = useState<ThemeName>(systemTheme);
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(
    currentThemeName === 'dark' ? darkTheme : lightTheme
  );

  useEffect(() => {
    const loadTheme = async () => {
      let savedTheme: string | null;

      if (typeof window === 'undefined') {
        savedTheme = await AsyncStorage.getItem('theme');
      } else {
        savedTheme = window.localStorage.getItem('theme');
      }

      if (savedTheme === 'light' || savedTheme === 'dark') {
        setCurrentThemeName(savedTheme as ThemeName);
        setCurrentTheme(savedTheme === 'dark' ? darkTheme : lightTheme);
      }
    };

    loadTheme();
  }, []);

  const setTheme = async (name: ThemeName) => {
    setCurrentThemeName(name);
    setCurrentTheme(name === 'dark' ? darkTheme : lightTheme);

    if (typeof window === 'undefined') {
      await AsyncStorage.setItem('theme', name);
    } else {
      window.localStorage.setItem('theme', name);
    }
  };

  return (
    <ThemeContext.Provider
      value={{
        name: currentThemeName,
        theme: currentTheme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}