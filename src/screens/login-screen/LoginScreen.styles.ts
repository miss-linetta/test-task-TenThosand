import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme.ts';

const { palette, typography } = theme;

export const styles = StyleSheet.create({
  arrowIcon: {
    height: 30,
    width: 30,
  },
  backButton: {
    left: 16,
    position: 'absolute',
    top: 75,
    zIndex: 1,
  },
  backgroundImage: {
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  container: {
    backgroundColor: palette.background,
    height: '100%',
  },
  emptySection: {
    height: '15%',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  formCard: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    elevation: 10,
    height: '85%',
    paddingHorizontal: 16,
    paddingVertical: 24,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  icon: {
    height: 48,
    marginLeft: 16,
    marginRight: 12,
    width: 48,
  },
  subtitle: {
    color: palette.text.secondary,
    fontFamily: typography.fonts.regular,
    fontSize: 14,
  },
  title: {
    color: palette.text.primary,
    fontFamily: typography.fonts.bold,
    fontSize: 20,
  },
});
