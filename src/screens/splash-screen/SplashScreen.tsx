import { styles } from './SplashScreen.styles.ts';
import { Image, View } from 'react-native';

export const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/splash.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};
