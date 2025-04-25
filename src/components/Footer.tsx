import { Box, Container, Grid, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import Logo from '../assets/branding/yana.svg?url';
import Instagram from '../assets/icons/Instagram.svg?url';
import LinkedIn from '../assets/icons/Linkedin.svg?url';
import useScreenSize from '../hooks/useScreenSize';
import theme from '../theme';

export const Footer = () => {
  const location = useLocation().pathname;
  const screenSize = useScreenSize();
  const { t } = useTranslation();

  if (
    location === '/login' ||
    location === '/' ||
    location === '/register' ||
    location === '/profile' ||
    location === '/profile/account' ||
    location === '/profile/configuration' ||
    location === '/profile/interactions' ||
    location === '/onboarding' ||
    location.startsWith('/reset-password')
  )
    return null;

  const sidebarWidth = screenSize === 'sm' ? 0 : theme.sidebar?.width;

  return (
    <Box
      component="footer"
      sx={{
        background: theme.gradients.gradientPurpleToBottom,
        color: 'white',
        padding: 2,
        py: 4,
        pb: screenSize === 'sm' ? 12.5 : 10,
        width: `calc(100% - ${sidebarWidth})`,
        marginLeft: `${sidebarWidth}`,
        position: 'relative',
        ...(screenSize === 'sm' && {
          width: '100%',
          marginLeft: 0,
        }),
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={4}
          sx={{
            justifyContent: 'space-between',
            px: { xs: 2, md: 0 },
            alignItems: 'flex-start',
          }}
        >
          <Grid
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 33.3333%' },
              maxWidth: { xs: '100%', md: '33.3333%' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                mb: 2,
                justifyContent: 'flex-start',
              }}
            >
              <img src={Logo} alt="Logo YouAreNotAlone" style={{ width: 40, height: 40 }} />
              <Typography variant="h2">{t('footer.title')}</Typography>
            </Box>
            <Typography variant="body2" sx={{ maxWidth: { xs: 400, sm: 300 } }}>
              {t('footer.copyright')}
            </Typography>
            <Typography variant="body2" sx={{ maxWidth: { xs: 400, sm: 300 }, mt: 2 }}>
              {t('footer.address')}
            </Typography>
          </Grid>

          <Grid
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 16.6666%' },
              maxWidth: { xs: '100%', md: '16.6666%' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="h5" sx={{ mb: -1 }} gutterBottom>
                {t('footer.products')}
              </Typography>
              <Typography variant="body2">{t('footer.support')}</Typography>
              <Typography variant="body2">{t('footer.medicalAssistance')}</Typography>
              <Typography variant="body2">{t('footer.resources')}</Typography>
            </Box>
          </Grid>

          <Grid
            sx={{
              flex: { xs: '0 0 100%', md: '0 0 16.6666%' },
              maxWidth: { xs: '100%', md: '16.6666%' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              }}
            >
              <Typography variant="h5" sx={{ mb: -1 }} gutterBottom>
                {t('footer.legal')}
              </Typography>
              <Typography variant="body2">{t('footer.terms')}</Typography>
              <Typography variant="body2">{t('footer.conditions')}</Typography>
              <Typography variant="body2">{t('footer.privacy')}</Typography>
            </Box>
          </Grid>

          <Grid>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" gutterBottom>
                {t('footer.contact')}
              </Typography>
              <Typography variant="body2">Info@yana.com</Typography>
              <Box sx={{ display: 'flex', mt: 2, gap: 2 }}>
                <img src={Instagram} alt="Instagram" style={{ width: 52, height: 40 }} />
                <img src={LinkedIn} alt="LinkedIn" style={{ width: 52, height: 40 }} />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
