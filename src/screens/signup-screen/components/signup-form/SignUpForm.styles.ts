import { StyleSheet } from 'react-native';
import { theme } from '../../../../theme/theme.ts';

const { palette, typography } = theme;

export const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.background,
    width: '100%',
  },
  title: {
    color: palette.text.primary,
    fontFamily: typography.fonts.bold,
    fontSize: typography.fontSizes.title,
    marginBottom: 24,
  },
  input: {
    borderColor: palette.border,
    borderRadius: 16,
    borderWidth: 1,
    color: palette.text.primary,
    fontFamily: typography.fonts.regular,
    fontSize: typography.fontSizes.bodyLarge,
    height: 56,
    marginBottom: 24,
    padding: 16,
  },
  errorText: {
    color: palette.error,
    fontSize: typography.fontSizes.caption,
    marginBottom: 8,
  },
  button: {
    alignItems: 'center',
    backgroundColor: palette.primary,
    borderRadius: 16,
    marginTop: 24,
    padding: 16,
  },
  buttonText: {
    color: '#fff',
    fontFamily: typography.fonts.bold,
    fontSize: typography.fontSizes.button,
    textTransform: 'capitalize',
  },
  passwordWrapper: {
    alignItems: 'center',
    borderColor: palette.border,
    borderRadius: 8,
    flexDirection: 'row',
    marginBottom: 12,
  },
  // eyeIcon: {
  //     marginLeft: 8,
  // },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 20,
  },
  inner: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 'auto',
  },
  label: {
    color: palette.text.secondary,
    fontSize: typography.fontSizes.bodyLarge,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});
