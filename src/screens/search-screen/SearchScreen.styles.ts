import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme.ts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F3F5',
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 70,
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.title,
    marginBottom: 16,
  },
  id: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.button,
  },
  item: {
    backgroundColor: theme.palette.background,
    borderRadius: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
    paddingVertical: 23,
  },
  name: {
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.fontSizes.body,
    marginTop: 4,
  },
  searchIcon: {
    height: 16,
    marginRight: 8,
    tintColor: theme.palette.text.secondary,
    width: 16,
  },
  searchInput: {
    color: theme.palette.text.primary,
    flex: 1,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.fontSizes.body,
    padding: 0,
  },
  searchWrapper: {
    alignItems: 'center',
    backgroundColor: theme.palette.background,
    borderColor: theme.palette.border,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    height: 56,
    marginBottom: 16,
    paddingHorizontal: 20,
  },
});

export default styles;
