import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './src/store';
import { PersistGate } from 'redux-persist/integration/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { LoginScreen } from './src/screens/login-screen/LoginScreen.tsx';
import SignUpScreen from './src/screens/signup-screen/SignUpScreen.tsx';
import { PinScreen } from './src/screens/pin-screen/PinScreen.tsx';
import { HomeScreen } from './src/screens/home-screen/HomeScreen.tsx';
import { SplashScreen } from './src/screens/splash-screen/SplashScreen.tsx';
import { WelcomeScreen } from './src/screens/welcome-screen/WelcomeScreen.tsx';
import SearchScreen from './src/screens/search-screen/SearchScreen.tsx';
import SettingsScreen from './src/screens/settings-screen/SettingsScreen.tsx';
import LanguageScreen from './src/screens/language-screen/LanguageScreen.tsx';

import { RootStackParamList } from './src/navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Welcome"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Welcome" component={WelcomeScreen} />
              <Stack.Screen name="LoginScreen" component={LoginScreen} />
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
              <Stack.Screen name="CreatePin" component={PinScreen} />
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Search" component={SearchScreen} />
              <Stack.Screen name="Settings" component={SettingsScreen} />
              <Stack.Screen name="Language" component={LanguageScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
