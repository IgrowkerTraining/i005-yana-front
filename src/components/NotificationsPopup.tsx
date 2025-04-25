import { ClickAwayListener, Paper, Popper } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useScreenSize from '../hooks/useScreenSize';
import theme from '../theme';
import NotificationsContainer from './NotificationsContainer';

interface Notification {
  id: string;
  messageId: string;
  timestamp: number;
}

interface NotificationsPopupProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
  notifications: Notification[];
}

const NotificationsPopup = ({
  anchorEl,
  open,
  onClose,
  notifications,
}: NotificationsPopupProps) => {
  const screenSize = useScreenSize();
  const navigate = useNavigate();
  const isDesktop = screenSize === 'lg' || screenSize === 'xl';

  useEffect(() => {
    if (open && !isDesktop) {
      onClose();
      navigate('/notifications');
    }
  }, [open, isDesktop, navigate, onClose]);

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

  if (!isDesktop) return null;

  return (
    <Popper open={open} anchorEl={anchorEl} placement="bottom-end" style={{ zIndex: 1300 }}>
      <ClickAwayListener onClickAway={onClose}>
        <Paper
          sx={{
            width: '400px',
            maxHeight: '80vh',
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: theme.colors.blackBackground,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '12px',
            boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.25)',
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: '4px',
            },
          }}
        >
          <NotificationsContainer
            notifications={notifications}
            getBackgroundColor={getBackgroundColor}
          />
        </Paper>
      </ClickAwayListener>
    </Popper>
  );
};

export default NotificationsPopup;
