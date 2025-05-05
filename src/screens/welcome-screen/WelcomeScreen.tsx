import { styles } from './WelcomeScreen.styles.ts';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { WelcomeCard } from './components/welcome-card/WelcomeCard.tsx';
import { RootStackParamList } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const WelcomeScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleSignIn = () => {
    navigation.navigate('LoginScreen');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/bg_pattern.png')}
        style={styles.backgroundImage}
        resizeMode="contain"
      />
      <View style={styles.content}>
        <View style={styles.columns}>
          <View style={styles.leftColumn}>
            <Image
              source={require('../../assets/splash.png')}
              style={styles.topImage}
              resizeMode="contain"
            />
            <WelcomeCard imageValue="welcome1.png" textValue="Lorem ipsum" />
            <WelcomeCard imageValue="welcome3.png" textValue="Lorem ipsum 3" />
          </View>

          <View style={styles.rightColumn}>
            <WelcomeCard imageValue="welcome2.png" textValue="Lorem ipsum 2" />
            <WelcomeCard imageValue="welcome4.png" textValue="Lorem ipsum 4" />
            <WelcomeCard imageValue="welcome5.png" textValue="Lorem ipsum 5" />
          </View>
        </View>
      </View>

      <View style={styles.authContainer}>
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
