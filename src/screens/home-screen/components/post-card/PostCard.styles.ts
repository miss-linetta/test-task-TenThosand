import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme/theme.ts';

export const styles = StyleSheet.create({
  postBody: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSizes.body,
    marginTop: 8,
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 12,
    padding: 12,
  },
  postTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.button,
  },
});
