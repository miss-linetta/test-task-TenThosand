import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme.ts';

const { palette } = theme;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: palette.background,
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 178,
    width: 178,
  },
});
