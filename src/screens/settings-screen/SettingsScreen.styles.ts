import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme.ts';

const styles = StyleSheet.create({
  arrowIcon: {
    height: 24,
    marginBottom: 16,
    marginTop: 12,
    width: 24,
  },
  avatar: {
    backgroundColor: '#dfe4ea',
    borderRadius: 20,
    height: 40,
    marginRight: 12,
    width: 40,
  },
  chevron: {
    height: 16,
    tintColor: theme.palette.text.secondary,
    width: 16,
  },
  container: {
    backgroundColor: theme.palette.background,
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 61,
  },
  heading: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.title,
    marginBottom: 24,
  },
  icon: {
    height: 20,
    marginRight: 12,
    tintColor: theme.palette.primary,
    width: 20,
  },
  item: {
    alignItems: 'center',
    borderColor: theme.palette.border,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 12,
    padding: 16,
  },
  itemText: {
    color: theme.palette.text.primary,
    flex: 1,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.fontSizes.body,
  },
  profileContainer: {
    alignItems: 'center',
    borderColor: theme.palette.border,
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 24,
    padding: 16,
  },
  profileName: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.fontSizes.body,
  },
  sectionTitle: {
    color: theme.palette.text.secondary,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.fontSizes.caption,
    marginBottom: 8,
    marginTop: 8,
  },
});

export default styles;
