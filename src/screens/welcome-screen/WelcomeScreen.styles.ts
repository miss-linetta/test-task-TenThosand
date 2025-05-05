import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme.ts';

const { palette, typography } = theme;

export const styles = StyleSheet.create({
  authContainer: {
    paddingBottom: 6,
    paddingHorizontal: 20,
  },
  backgroundImage: {
    bottom: 0,
    height: '50%',
    left: 0,
    position: 'absolute',
    right: 0,
    width: '100%',
    zIndex: -1,
  },
  columns: {
    flexDirection: 'row',
    gap: 16,
  },
  container: {
    backgroundColor: '#F2F3F5',
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  leftColumn: {
    gap: 16,
    justifyContent: 'flex-start',
  },
  rightColumn: {
    gap: 16,
    justifyContent: 'flex-start',
    marginTop: 74,
  },
  signInText: {
    color: palette.primary,
    fontSize: typography.fontSizes.bodyLarge,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  signUpButton: {
    backgroundColor: palette.primary,
    borderRadius: 16,
    paddingVertical: 14,
    width: '100%',
  },
  signUpText: {
    color: palette.background,
    fontSize: typography.fontSizes.button,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topImage: {
    alignSelf: 'center',
    backgroundColor: palette.primary,
    borderRadius: 16,
    height: 136,
    marginTop: 0,
    width: 164,
  },
});
