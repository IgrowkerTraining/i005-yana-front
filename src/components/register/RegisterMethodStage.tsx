import { Link, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Mail from '../../assets/icons/mail.svg?url';
import CustomButton from '../../commons/CommonButton';
import theme from '../../theme';

export default function RegisterMethodStage({ onEmailClick }: { onEmailClick: () => void }) {
  const { t } = useTranslation();

  return (
    <>
      <CustomButton
        text={t('register.method.useEmail')}
        icon={<img src={Mail} alt="Mail Icon" style={{ width: '20px' }} />}
        onClick={onEmailClick}
      />
      <Typography variant="body2" align="center" sx={{ color: '#fff', fontWeight: 'light' }}>
        {t('register.method.privacyText')}{' '}
        <Link underline="none" sx={{ color: theme.colors.lightBlue }}>
          {t('register.method.privacyLink')}
        </Link>
      </Typography>
    </>
  );
}
