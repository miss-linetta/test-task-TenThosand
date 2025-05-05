import { View, Text, Image } from 'react-native';
import React from 'react';
import { WelcomeCardProps } from './types';
import { styles } from './WelcomeCard.styles.ts';

const images: Record<string, any> = {
  'splash.png': require('../../../../assets/splash.png'),
  'welcome1.png': require('../../../../assets/welcome1.png'),
  'welcome2.png': require('../../../../assets/welcome2.png'),
  'welcome3.png': require('../../../../assets/welcome3.png'),
  'welcome4.png': require('../../../../assets/welcome4.png'),
  'welcome5.png': require('../../../../assets/welcome5.png'),
};

export const WelcomeCard: React.FC<WelcomeCardProps> = ({
  textValue,
  imageValue,
}) => {
  return (
    <View style={styles.container}>
      <Image
        source={images[imageValue]}
        resizeMode="contain"
        style={styles.image}
      />
      <Text style={styles.text}>{textValue}</Text>
    </View>
  );
};
