import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  CreatePin: undefined;
  Home: undefined;
  Welcome: undefined;
  Search: undefined;
  Settings: undefined;
  Language: undefined;
};

export type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;
export type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUpScreen'
>;
export type CreatePinScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CreatePin'
>;
export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Welcome'
>;
export type SearchScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Search'
>;
export type SettingsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Settings'
>;
export type LanguageScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Language'
>;
