import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './StepCard.styles';
import { StepCardProps } from './types';

export const StepCard = ({
  title,
  steps,
  backgroundColor,
  textColor,
  icon,
  style,
}: StepCardProps) => {
  return (
    <View style={[styles.card, { backgroundColor }, style]}>
      <View style={styles.row}>
        <View style={styles.iconWrapper}>
          <Image source={icon} style={styles.icon} />
        </View>
        <Text style={[styles.title, { color: textColor }]}>{title}</Text>
      </View>
      <Text style={[styles.steps, { color: textColor }]}>{steps}</Text>
    </View>
  );
};
