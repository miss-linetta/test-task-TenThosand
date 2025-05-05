import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { LanguageCode } from '../../store/slices/settingsSlice';
import styles from './LanguageScreen.styles.ts';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../../navigation/types';

const languages: { code: LanguageCode; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'Arabic' },
];

const LanguageScreen = () => {
  const selectedLang = useSelector(
    (state: RootState) => state.settings.language,
  );
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/arrow.png')}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      <Text style={styles.heading}>Language</Text>
      {languages.map(lang => (
        <TouchableOpacity key={lang.code} style={styles.item}>
          <Image
            source={require('../../assets/globe.png')}
            style={styles.icon}
          />
          <Text style={styles.optionText}>{lang.label}</Text>
          <View style={styles.radioCircle}>
            {selectedLang === lang.code && (
              <Image
                source={require('../../assets/checkmark.png')}
                style={styles.checkIcon}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default LanguageScreen;
