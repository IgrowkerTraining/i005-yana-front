import { Box, Typography } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import theme from '../theme';

interface NotificationMessageProps {
  messageId: string;
  timestamp: number;
  backgroundColor?: string;
}

const NotificationMessage = ({
  messageId,
  timestamp,
  backgroundColor = '#E8F5E9',
}: NotificationMessageProps) => {
  const [timeAgo, setTimeAgo] = useState<string>('');
  const { t } = useTranslation();

  const calculateTimeAgo = useCallback((timestamp: number) => {
    const now = Date.now();
    const diffInSeconds = Math.floor((now - timestamp) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInDays > 0) {
      return `${diffInDays}d`;
    }
    if (diffInHours > 0) {
      return `${diffInHours}h`;
    }
    if (diffInMinutes > 0) {
      return `${diffInMinutes}m`;
    }
    return 'now';
  }, []);

  useEffect(() => {
    setTimeAgo(calculateTimeAgo(timestamp));

    // Update time every minute
    const interval = setInterval(() => {
      setTimeAgo(calculateTimeAgo(timestamp));
    }, 60000);

    return () => clearInterval(interval);
  }, [timestamp, calculateTimeAgo]);

  return (
    <Box
      sx={{
        backgroundColor,
        borderRadius: '12px',
        padding: '16px',
        marginBottom: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="body1" color={theme.colors.blackBackground} fontWeight="bold">
          {t('notifications.newMessage')}
        </Typography>
        <Typography variant="body2" color={theme.colors.blackBackground}>
          {timeAgo}
        </Typography>
      </Box>
      <Typography variant="body1" color={theme.colors.blackBackground}>
        {t(`markerModal.templateMessages.${messageId}`)}
      </Typography>
    </Box>
  );
};

export default NotificationMessage;
