import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import NotificationMessage from './NotificationMessage';

interface Notification {
  id: string;
  messageId: string;
  timestamp: number;
}

interface NotificationsContainerProps {
  notifications: Notification[];
  getBackgroundColor: (messageId: string) => string;
}

interface GroupedNotifications {
  today: Notification[];
  yesterday: Notification[];
  older: Notification[];
}

const NotificationsContainer = ({
  notifications,
  getBackgroundColor,
}: NotificationsContainerProps) => {
  const { t } = useTranslation();
  const today = new Date().setHours(0, 0, 0, 0);
  const yesterday = today - 24 * 60 * 60 * 1000;

  const groupedNotifications = notifications.reduce(
    (groups: GroupedNotifications, notification) => {
      const notificationDate = new Date(notification.timestamp).setHours(0, 0, 0, 0);

      if (notificationDate === today) {
        groups.today.push(notification);
      } else if (notificationDate === yesterday) {
        groups.yesterday.push(notification);
      } else {
        groups.older.push(notification);
      }
      return groups;
    },
    { today: [], yesterday: [], older: [] }
  );

  return (
    <Box sx={{ padding: '16px' }}>
      {groupedNotifications.today.length > 0 && (
        <Box sx={{ marginBottom: '24px' }}>
          <Typography variant="h6" color="#fff" sx={{ marginBottom: '12px' }}>
            {t('notifications.today')}
          </Typography>
          {groupedNotifications.today.map((notification) => (
            <NotificationMessage
              key={notification.id}
              messageId={notification.messageId}
              timestamp={notification.timestamp}
              backgroundColor={getBackgroundColor(notification.messageId)}
            />
          ))}
        </Box>
      )}

      {groupedNotifications.yesterday.length > 0 && (
        <Box sx={{ marginBottom: '24px' }}>
          <Typography variant="h6" color="#fff" sx={{ marginBottom: '12px' }}>
            {t('notifications.yesterday')}
          </Typography>
          {groupedNotifications.yesterday.map((notification) => (
            <NotificationMessage
              key={notification.id}
              messageId={notification.messageId}
              timestamp={notification.timestamp}
              backgroundColor={getBackgroundColor(notification.messageId)}
            />
          ))}
        </Box>
      )}

      {groupedNotifications.older.length > 0 && (
        <Box>
          <Typography variant="h6" color="#fff" sx={{ marginBottom: '12px' }}>
            {t('notifications.older')}
          </Typography>
          {groupedNotifications.older.map((notification) => (
            <NotificationMessage
              key={notification.id}
              messageId={notification.messageId}
              timestamp={notification.timestamp}
              backgroundColor={getBackgroundColor(notification.messageId)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default NotificationsContainer;
