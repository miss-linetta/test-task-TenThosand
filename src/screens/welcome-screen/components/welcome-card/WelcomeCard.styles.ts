import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme/theme.ts';

const { palette, typography } = theme;

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: palette.background,
    borderRadius: 16,
    elevation: 3,
    height: 136,
    justifyContent: 'center',
    padding: 12,
    width: 164,
  },
  image: {
    height: 48,
    marginBottom: 8,
    width: 104,
  },
  text: {
    color: palette.text.primary,
    fontSize: typography.fontSizes.caption,
    textAlign: 'center',
  },
});
