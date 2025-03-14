import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A3A1DC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/lakiria-logo-red.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to lakiria!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">lakiria</ThemedText>
        <ThemedText>
          You <ThemedText type="defaultSemiBold">version</ThemedText>{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'ios',
              android: 'android',
              web: 'web'
            })}
          </ThemedText>{' '}
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },

  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    //left: 0,
    alignSelf: 'center',
    position: 'absolute',
    borderRadius: 100, // Закругление углов
    overflow: 'hidden', // Скрываем лишнее за пределами закругления
    backgroundColor: '#A3A1DC', // Фон контейнера (опционально)
    ...Platform.select({
      ios: {
        shadowColor: '#000', // Цвет тени для iOS
        shadowOffset: { width: 0, height: 4 }, // Размер и направление тени
        shadowOpacity: 0.2, // Прозрачность тени
        shadowRadius: 4, // Размытие тени
      },
      android: {
        elevation: 8, // Высота тени для Android
      },
    }),
  },
});
