import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import NotificationsContainer from '../components/NotificationsContainer';
import useScreenSize from '../hooks/useScreenSize';
import theme from '../theme';

interface Notification {
  id: string;
  messageId: string;
  timestamp: number;
}

const NotificationsPage = () => {
  const { t } = useTranslation();
  const screenSize = useScreenSize();
  // Current time for reference
  const now = Date.now();
  const hour = 3600000; // 1 hour in milliseconds
  const day = 24 * hour;

  // Fake notifications with different timestamps
  const fakeNotifications: Notification[] = [
    {
      id: '1',
      messageId: '3',
      timestamp: now - hour, // 1 hour ago
    },
    {
      id: '2',
      messageId: '2',
      timestamp: now - 2 * hour, // 2 hours ago
    },
    {
      id: '3',
      messageId: '2',
      timestamp: now - 3 * hour, // 3 hours ago
    },
    {
      id: '4',
      messageId: '3',
      timestamp: now - 5 * hour, // 5 hours ago
    },
    {
      id: '5',
      messageId: '1',
      timestamp: now - 7 * hour, // 7 hours ago
    },
    {
      id: '6',
      messageId: '3',
      timestamp: now - day, // Yesterday
    },
    {
      id: '7',
      messageId: '1',
      timestamp: now - (day + 2 * hour), // Yesterday + 2 hours
    },
    {
      id: '8',
      messageId: '2',
      timestamp: now - 2 * day, // 2 days ago
    },
    {
      id: '9',
      messageId: '3',
      timestamp: now - 3 * day, // 3 days ago
    },
  ];

  // Calculate background color based on messageId
  const getBackgroundColor = (messageId: string) => {
    const index = Number.parseInt(messageId);
    switch (index) {
      case 1: // ¡Ánimo!
        return theme.colors.notificationPink;
      case 2: // Cuentas con todo mi apoyo
        return theme.colors.notificationBlue;
      case 3: // Estoy contigo, comparto lo que sientes
        return theme.colors.notificationGreen;
      default:
        return theme.colors.notificationBlue;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.colors.defaultBackground,
        minHeight: '100vh',
        color: 'white',
        pl: screenSize !== 'sm' ? theme.sidebar?.width : '0px',
        pt: screenSize !== 'sm' ? '100px' : 7.5,
      }}
    >
      <Box
        sx={{
          padding: 2,
          position: 'sticky',
          top: 0,
          backgroundColor: theme.colors.defaultBackground,
          zIndex: 1,
        }}
      >
        <Typography variant="h4">{t('notifications.title')}</Typography>
      </Box>
      <NotificationsContainer
        notifications={fakeNotifications}
        getBackgroundColor={getBackgroundColor}
      />
    </Box>
  );
};

export default NotificationsPage;
