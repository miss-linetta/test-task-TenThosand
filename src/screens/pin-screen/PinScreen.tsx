import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
import * as Keychain from 'react-native-keychain';
import { useNavigation } from '@react-navigation/native';
import { styles } from './PinScreen.styles';
import { CreatePinScreenNavigationProp } from '../../navigation/types';
import { theme } from '../../theme/theme.ts';

const PIN_LENGTH = 5;

export const PinScreen: React.FC = () => {
  const [step, setStep] = useState<'create' | 'confirm'>('create');
  const [firstPin, setFirstPin] = useState('');
  const [pin, setPin] = useState('');
  const navigation = useNavigation<CreatePinScreenNavigationProp>();

  const handleKeyPress = async (digit: string) => {
    if (pin.length < PIN_LENGTH) {
      const newPin = pin + digit;
      setPin(newPin);

      if (newPin.length === PIN_LENGTH) {
        if (step === 'create') {
          setFirstPin(newPin);
          setPin('');
          setStep('confirm');
        } else {
          if (newPin === firstPin) {
            await Keychain.setGenericPassword('userPin', newPin);
            navigation.navigate('Home');
          } else {
            Alert.alert('PIN mismatch', 'PIN codes do not match. Try again.');
            setPin('');
            setFirstPin('');
            setStep('create');
          }
        }
      }
    }
  };

  const handleBackspace = () => {
    setPin(pin.slice(0, -1));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.arrowContainer}
      >
        <Image
          source={require('../../assets/arrow.png')}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <Image source={require('../../assets/pin.png')} style={styles.icon} />
      </View>

      <Text style={styles.title}>
        {step === 'create' ? 'Create a Pin code' : 'Repeat a Pin code'}
      </Text>
      <Text style={styles.subtitle}>Enter 5 digit code:</Text>

      <View style={styles.dotsContainer}>
        {[...Array(PIN_LENGTH)].map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              {
                backgroundColor:
                  i < pin.length ? theme.palette.primary : '#E0E0E0',
              },
            ]}
          />
        ))}
      </View>

      <View style={styles.keyboard}>
        {[
          ['1', '2', '3'],
          ['4', '5', '6'],
          ['7', '8', '9'],
          ['', '0', '←'],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.keyRow}>
            {row.map((key, index) => (
              <TouchableOpacity
                key={index}
                style={styles.key}
                onPress={() => {
                  if (key === '←') handleBackspace();
                  else if (key !== '') handleKeyPress(key);
                }}
                disabled={key === ''}
              >
                <Text style={styles.keyText}>{key === '←' ? '⌫' : key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          {
            backgroundColor:
              pin.length === PIN_LENGTH ? theme.palette.primary : '#ccc',
          },
        ]}
        disabled={pin.length < PIN_LENGTH}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};
