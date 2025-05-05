import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

import { LoginForm } from './components/login-form/LoginForm.tsx';
import { login } from '../../api/auth/authAPI.ts';
import { setCredentials } from '../../store/slices/authSlice.ts';
import { saveUserPin } from '../../utils/secureStore';
import { LoginSchema } from './components/login-form/validation';
import { styles } from './LoginScreen.styles.ts';
import { LoginScreenNavigationProp } from '../../navigation/types';
import Keychain from 'react-native-keychain';

export const LoginScreen: React.FC = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const dispatch = useDispatch();

  const handleLogin = async (values: LoginSchema) => {
    try {
      const data = await login(values);
      dispatch(setCredentials({ token: data.accessToken, user: data }));

      const pinData = await Keychain.getGenericPassword();
      if (pinData) {
        await saveUserPin(pinData.password);
      }

      navigation.navigate('CreatePin');
      console.log('success');
    } catch (err) {
      console.warn('Login error', err);
    }
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
            <Text style={styles.title}>Log In</Text>
            <Text style={styles.subtitle}>Personal Account</Text>
          </View>
        </View>
        <LoginForm onSubmit={handleLogin} />

        {/*TODO: Add Create Account button*/}
        {/*<TouchableOpacity*/}
        {/*    style={styles.backButton}*/}
        {/*    onPress={() => navigation.navigate('SignUpScreen')}*/}
        {/*>*/}
        {/*    <Text>Create Account</Text>*/}
        {/*</TouchableOpacity>*/}
      </View>
    </View>
  );
};
