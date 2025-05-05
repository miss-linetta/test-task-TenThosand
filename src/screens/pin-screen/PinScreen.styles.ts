import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme.ts';

export const styles = StyleSheet.create({
  arrowContainer: {
    paddingLeft: 16,
    textAlign: 'left',
    width: '100%',
  },
  arrowIcon: {
    height: 24,
    marginBottom: 16,
    marginTop: 12,
    width: 24,
  },
  button: {
    alignItems: 'center',
    borderRadius: 12,
    height: 50,
    justifyContent: 'center',
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.button,
  },
  container: {
    alignItems: 'center',
    backgroundColor: theme.palette.background,
    flex: 1,
    paddingTop: 80,
  },
  dot: {
    borderRadius: 12,
    height: 24,
    width: 24,
  },
  dotsContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 40,
  },
  icon: {
    height: 48,
    resizeMode: 'contain',
    tintColor: 'transparent',
    width: 48,
  },
  iconContainer: {
    backgroundColor: '#F0FDF4',
    borderRadius: 50,
    marginBottom: 24,
    padding: 16,
  },
  key: {
    alignItems: 'center',
    borderRadius: 35,
    height: 70,
    justifyContent: 'center',
    width: 70,
  },
  keyRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 8,
    width: '100%',
  },
  keyText: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fonts.bold,
    fontSize: 26,
    fontWeight: 'bold',
  },
  keyboard: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 30,
    paddingHorizontal: 24,
    width: '100%',
  },
  subtitle: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSizes.body,
    marginBottom: 30,
  },
  title: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.subtitle,
    marginBottom: 38,
  },
});
