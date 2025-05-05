import { StyleSheet } from 'react-native';
import { theme } from '../../theme/theme.ts';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 32,
    paddingBottom: 29,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  cardLink: {
    color: theme.palette.primary,
    fontSize: theme.typography.fontSizes.button,
    paddingTop: 24,
  },
  cardSubtitle: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSizes.body,
    marginTop: 4,
  },
  cardTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.subtitle,
  },
  container: {
    backgroundColor: '#F2F3F5',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary,
    borderRadius: 16,
    marginBottom: 24,
    padding: 144,
  },
  headerLabel: {
    color: '#fff',
    fontFamily: theme.typography.fonts.regular,
    fontSize: theme.typography.fontSizes.body,
  },
  headerName: {
    color: '#fff',
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.title,
  },
  mainSection: {
    padding: 16,
  },
  postBody: {
    color: theme.palette.text.secondary,
    fontSize: theme.typography.fontSizes.body,
    marginTop: 4,
  },
  postCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 1,
    marginBottom: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  postTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.button,
  },
  sectionTitle: {
    color: theme.palette.text.primary,
    fontFamily: theme.typography.fonts.bold,
    fontSize: theme.typography.fontSizes.subtitle,
    marginBottom: 8,
  },
  stepBoxDark: {
    backgroundColor: '#444',
    borderRadius: 16,
    flex: 1,
    padding: 16,
  },
  stepBoxRed: {
    backgroundColor: theme.palette.error,
    borderRadius: 16,
    flex: 1,
    padding: 16,
  },
  stepCount: {
    color: '#fff',
    fontSize: theme.typography.fontSizes.caption,
  },
  stepText: {
    color: '#fff',
    fontSize: theme.typography.fontSizes.body,
    marginBottom: 8,
  },
  stepsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
});
