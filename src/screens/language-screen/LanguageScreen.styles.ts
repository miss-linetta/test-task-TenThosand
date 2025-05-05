import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme.ts';

const styles = StyleSheet.create({
  arrowIcon: {
    height: 24,
    marginBottom: 16,
    marginTop: 12,
    width: 24,
  },
  checkIcon: {
    height: 12,
    tintColor: theme.palette.primary,
    width: 12,
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
  optionText: {
    color: theme.palette.text.primary,
    flex: 1,
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.fontSizes.body,
  },
  radioCircle: {
    alignItems: 'center',
    borderColor: theme.palette.primary,
    borderRadius: 10,
    borderWidth: 2,
    height: 20,
    justifyContent: 'center',
    width: 20,
  },
});

export default styles;
