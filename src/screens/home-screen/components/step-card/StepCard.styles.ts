import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme/theme.ts';

export const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    height: 152,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 24,
    width: 233,
  },
  icon: {
    height: 24,
    tintColor: 'white',
    width: 24,
  },
  iconWrapper: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary,
    borderRadius: 24,
    height: 48,
    justifyContent: 'center',
    width: 48,
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  steps: {
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.fontSizes.body,
  },
  title: {
    color: 'white',
    flexShrink: 1,
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.body,
  },
});
