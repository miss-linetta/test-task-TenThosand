import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './SettingsScreen.styles';
import { useNavigation } from '@react-navigation/native';
import { LoginScreenNavigationProp } from '../../navigation/types';
import { RootState } from '../../store';
import Keychain from 'react-native-keychain';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/slices/authSlice.ts';

const SettingsScreen = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogout = async () => {
    await Keychain.resetGenericPassword();
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/arrow.png')}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>
      <Text style={styles.heading}>Settings</Text>

      <View style={styles.profileContainer}>
        <View style={styles.avatar} />
        <Text style={styles.profileName}>{user?.name || 'John doe'}</Text>
      </View>

      <Text style={styles.sectionTitle}>Basic</Text>
      <TouchableOpacity
        style={styles.item}
        onPress={() => navigation.navigate('Language')}
      >
        <Image source={require('../../assets/globe.png')} style={styles.icon} />
        <Text style={styles.itemText}>Language</Text>
        <Image
          source={require('../../assets/arrow-right.png')}
          style={styles.chevron}
        />
      </TouchableOpacity>

      <Text style={styles.sectionTitle}>Other</Text>
      <TouchableOpacity style={styles.item} onPress={handleLogout}>
        <Image
          source={require('../../assets/logout.png')}
          style={styles.icon}
        />
        <Text style={styles.itemText}>Log Out</Text>
        <Image
          source={require('../../assets/arrow-right.png')}
          style={styles.chevron}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SettingsScreen;
