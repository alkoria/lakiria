import { View, Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A3A1DC', dark: '#1D3D47' }}
      headerImage={
        <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/lakiria-logo-blue-rm.png')}
          style={styles.reactLogo}
          //resizeMode="cover"
          resizeMode="stretch"
        />

      </View>
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

  imageContainer: {
    flex: 1, // Занимает все доступное пространство
    height: '100%',
    //position: 'absolute',
    opacity: 0.8, // Прозрачность всего элемента (80% непрозрачности)
    width: '100%',
    alignSelf: 'center',
    borderRadius: 0,
    overflow: 'hidden',
    backgroundColor: '#A3A1DC',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  reactLogo: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  ////////
  // reactLogo: {
  //   height: '100%',
  //   width: '100%',
  //   bottom: 0,
  //   //left: 0,
  //   alignSelf: 'center',
  //   position: 'absolute',
  //   borderRadius: 0, // Закругление углов
  //   overflow: 'hidden', // Скрываем лишнее за пределами закругления
  //   backgroundColor: '#A3A1DC', // Фон контейнера (опционально)
  //   ...Platform.select({
  //     ios: {
  //       shadowColor: '#000', // Цвет тени для iOS
  //       shadowOffset: { width: 0, height: 4 }, // Размер и направление тени
  //       shadowOpacity: 0.2, // Прозрачность тени
  //       shadowRadius: 4, // Размытие тени
  //     },
  //     android: {
  //       elevation: 8, // Высота тени для Android
  //     },
  //   }),
  // },
});
