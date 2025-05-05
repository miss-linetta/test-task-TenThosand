import * as Keychain from 'react-native-keychain';

export const saveBiometricData = async () => {
  await Keychain.setGenericPassword('biometric', 'enabled');
};

export const authenticateBiometrically = async (): Promise<boolean> => {
  try {
    const result = await Keychain.getGenericPassword({
      authenticationPrompt: {
        title: 'Scan your face or fingerprint',
      },
    });
    return !!result;
  } catch (error) {
    console.warn('Biometric auth failed:', error);
    return false;
  }
};
