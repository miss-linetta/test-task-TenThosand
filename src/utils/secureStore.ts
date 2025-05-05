import * as Keychain from 'react-native-keychain';
import { UserPin } from './types';

const PIN_KEY = 'user_pin';

export const saveUserPin = async (pin: UserPin) => {
  await Keychain.setGenericPassword(PIN_KEY, pin, { service: PIN_KEY });
};

export const getUserPin = async (): Promise<UserPin | null> => {
  const credentials = await Keychain.getGenericPassword({ service: PIN_KEY });

  if (credentials) {
    return credentials.password;
  }

  return null;
};

export const deleteUserPin = async () => {
  await Keychain.resetGenericPassword({ service: PIN_KEY });
};
