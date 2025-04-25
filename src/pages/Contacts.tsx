import { Box, Divider, Skeleton, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useContacts } from '../hooks/useContacts';
import useScreenSize from '../hooks/useScreenSize';
import theme from '../theme';

export default function Contacts() {
  const { contacts, isLoading } = useContacts();
  const { t } = useTranslation();
  const screenSize = useScreenSize();

  const renderContactPlaceholder = (index: number) => (
    <Box key={`placeholder-${index}`} mb={4}>
      <Skeleton
        variant="text"
        width="60%"
        height={40}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}
      />
      <Skeleton
        variant="text"
        width="80%"
        height={24}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}
      />
      <Skeleton
        variant="text"
        width="70%"
        height={24}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}
      />
      <Skeleton
        variant="text"
        width="70%"
        height={24}
        sx={{ bgcolor: 'rgba(255, 255, 255, 0.1)' }}
      />
    </Box>
  );

  const renderContact = (contact: { name: string }, index: number, array: { name: string }[]) => (
    <Box key={contact.name}>
      <Box mb={4} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography variant="h4" color={'#fff'}>
          {contact.name}
        </Typography>
        <Typography variant="body1" fontWeight={100} color={'#fff'}>
          {t(`/contacts.contacts.${contact.name}.description`)}
        </Typography>
        <Typography variant="body1" fontWeight={100} color={theme.colors.yellow}>
          {t(`/contacts.contacts.${contact.name}.schedule`)}
        </Typography>
        <Typography variant="body1" fontWeight={100} color={theme.colors.yellow}>
          {t(`/contacts.contacts.${contact.name}.phone`)}
        </Typography>
      </Box>
      {index < array.length - 1 && (
        <Divider sx={{ borderColor: '#fff', width: '70%', margin: '0 auto 40px auto' }} />
      )}
    </Box>
  );

  const isLargeScreen = screenSize === 'lg' || screenSize === 'xl';
  const halfContacts = Math.ceil(contacts.length / 2);
  const firstRowContacts = contacts.slice(0, halfContacts);
  const secondRowContacts = contacts.slice(halfContacts);

  return (
    <Box
      minHeight="100vh"
      display="flex"
      flexDirection="column"
      sx={{ backgroundColor: theme.colors.defaultBackground }}
      px={screenSize === 'sm' ? 3 : isLargeScreen ? 17.5 : 12.5}
      pt={12.5}
    >
      {isLargeScreen && (
        <Typography variant="h2" color={'#fff'} mb={4}>
          {t('/contacts.title')}
        </Typography>
      )}
      <Box px={isLargeScreen ? 10 : 0}>
        {isLoading ? (
          isLargeScreen ? (
            <Box display="flex" gap={4}>
              <Box flex={1}>{[0, 1, 2].map((index) => renderContactPlaceholder(index))}</Box>
              <Box flex={1}>{[3, 4].map((index) => renderContactPlaceholder(index))}</Box>
            </Box>
          ) : (
            <>{[0, 1, 2, 3, 4].map((index) => renderContactPlaceholder(index))}</>
          )
        ) : isLargeScreen ? (
          <Box display="flex" gap={4}>
            <Box flex={1}>
              {firstRowContacts.map((contact, index, array) =>
                renderContact(contact, index, array)
              )}
            </Box>
            <Box flex={1}>
              {secondRowContacts.map((contact, index, array) =>
                renderContact(contact, index, array)
              )}
            </Box>
          </Box>
        ) : (
          contacts.map((contact, index, array) => renderContact(contact, index, array))
        )}
      </Box>
    </Box>
  );
}
