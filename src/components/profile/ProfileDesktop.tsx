import { Avatar, Box, Typography } from '@mui/material';
import type { FC } from 'react';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import theme from '../../theme';

import avatarIcon31 from '../../assets/avatars/avatar_31.svg?url';
import avatarIcon32 from '../../assets/avatars/avatar_32.svg?url';
import avatarIcon33 from '../../assets/avatars/avatar_33.svg?url';
import avatarIcon34 from '../../assets/avatars/avatar_34.svg?url';
import avatarIcon35 from '../../assets/avatars/avatar_35.svg?url';
import deleteIcon from '../../assets/icons/cancel.svg?url';
import CustomButton from '../../commons/CommonButton';

import Modal from '../../commons/DeleteModal';
import { useDeleteAccount } from '../../hooks/useDeleteAccount';
import useScreenSize from '../../hooks/useScreenSize';
import AccountSettings from '../../pages/profile/AccountSettings';
import ConfigurationSettings from '../../pages/profile/ConfigurationSettings';
import InteractionsSettings from '../../pages/profile/InteractionsSettings';
import { useSettingsStore } from '../../store/useSettingsStore';
import SettingsSection from './SettingsSection';

const AVATAR_IMAGES = {
  31: avatarIcon31,
  32: avatarIcon32,
  33: avatarIcon33,
  34: avatarIcon34,
  35: avatarIcon35,
};

const ProfileDesktop: FC = () => {
  const { t } = useTranslation();
  const screenSize = useScreenSize();
  const { settings } = useSettingsStore();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteAccount = useDeleteAccount();

  const handleDeleteAccount = (password: string) => {
    deleteAccount.mutate(password, {
      onSuccess: () => {
        setIsDeleteModalOpen(false);
      },
      onError: (error) => {
        console.error('Error deleting account:', error);
      },
    });
  };

  const avatarSrc = useMemo(
    () => AVATAR_IMAGES[settings.avatar as keyof typeof AVATAR_IMAGES],
    [settings.avatar]
  );

  return (
    <Box
      sx={{
        height: {
          lg: '100vh',
          sm: '100%',
        },
        width: '100vw',
        display: 'grid',
        gridTemplateRows: {
          lg: 'repeat(9, 1fr)',
          sm: 'repeat(17, 4em)',
        },
        gridTemplateColumns: 'repeat(12, 1fr)',
        margin: 0,
        padding: {
          sm: '8em',
          md: '1% 5%',
          lg: '5% 10%',
        },
        gap: '1em',
        backgroundColor: settings.customization
          ? theme.colors[settings.customization as keyof typeof theme.colors]
          : theme.colors.defaultBackground,
      }}
    >
      {(screenSize === 'xl' || screenSize === 'lg') && (
        <Typography
          variant="h1"
          sx={{
            gridRow: 1,
            gridColumn: '1 / 3',
            justifySelf: 'start',
            color: 'white',
          }}
        >
          {t('/profile.title')}
        </Typography>
      )}

      <Box
        sx={{
          gridRow: {
            lg: '2 / 10',
            sm: '1 / 4',
          },
          gridColumn: {
            lg: '1 / 3',
            sm: '1 / 13',
          },
        }}
      >
        <Avatar
          sx={{
            width: {
              lg: '80%',
              sm: 'auto',
            },
            height: {
              lg: 'auto',
              sm: '100%',
            },
            aspectRatio: '1/1',
            mx: screenSize === 'md' ? 'auto' : 0,
          }}
          src={avatarSrc}
          alt="User Avatar"
        />
      </Box>

      {/* White line */}
      <Box
        sx={{
          height: {
            lg: '100%',
            sm: '1px',
          },
          width: {
            lg: '1px',
            sm: '100%',
          },
          backgroundColor: 'white',
          gridRow: {
            lg: '1 / 10',
            sm: '4',
          },
          gridColumn: {
            lg: '3',
            sm: '1 / 13',
          },
          justifySelf: 'center',
          alignSelf: 'center',
        }}
      />

      {/* Account Section */}
      <AccountSettings />

      {/* Configuration Section */}
      <ConfigurationSettings />

      {/* Interactions Section */}
      <InteractionsSettings />

      {/* Others Section */}
      <SettingsSection
        title="/profile/others.title"
        gridRow={{ lg: '6 / 10', sm: '16 / 17' }}
        gridColumn={{ lg: '9 / 13', sm: '1 / 13' }}
      >
        <CustomButton
          text={t('/profile.deleteAccount')}
          icon={<img src={deleteIcon} alt={t('/profile.deleteAccount')} />}
          iconPosition="end"
          variantType="square-cancel"
          onClick={() => setIsDeleteModalOpen(true)}
        />
      </SettingsSection>

      <Modal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onPasswordSubmit={handleDeleteAccount}
      />
    </Box>
  );
};

export default ProfileDesktop;
