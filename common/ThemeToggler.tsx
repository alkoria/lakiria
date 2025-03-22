// common/ThemeToggler.tsx

import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Platform } from 'react-native';
import { useTheme } from '@/common/ThemeProvider';
import { useEffect } from 'react';

export default function ThemeToggler() {
  const { name, setTheme } = useTheme();

  useEffect(() => {
    console.log('ThemeToggler: Current theme is', name); // Логирование при изменении темы
  }, [name]);

  return (
    <TouchableOpacity
      onPress={() => setTheme(name === 'light' ? 'dark' : 'light')}
      hitSlop={{ top: 4, bottom: 4, left: 4, right: 4 }}
    >
      <Ionicons
        name={name === 'dark' ? 'sunny-outline' : 'moon-outline'}
        size={Platform.OS === 'ios' ? 22 : 25}
        color="black"
      />
    </TouchableOpacity>
  );
}