import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './SignUpScreen.styles.ts';
import { SignUpForm } from './components/signup-form/SignUpForm.tsx';
import { SignUpSchema } from './components/signup-form/validation';
import { useNavigation } from '@react-navigation/native';

const SignUpScreen = () => {
  const navigation = useNavigation();

  const handleSignUp = (data: SignUpSchema) => {
    console.log('📦 Registration submitted:', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.emptySection}>
        <Image
          source={require('../../assets/bg_pattern.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        />

        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/arrow.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.formCard}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/user-icon.png')}
            style={styles.icon}
          />
          <View>
            <Text style={styles.title}>Sign up</Text>
            <Text style={styles.subtitle}>Personal Account</Text>
          </View>
        </View>
        <SignUpForm onSubmit={handleSignUp} />
      </View>
    </View>
  );
};

export default SignUpScreen;
