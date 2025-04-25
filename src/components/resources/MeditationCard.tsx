import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';
import type React from 'react';
import { useTranslation } from 'react-i18next';
import CommonButton from '../../commons/CommonButton';
import type { meditationDataProps } from '../../data/resourcesData';
import useScreenSize from '../../hooks/useScreenSize';

const MeditationCard: React.FC<meditationDataProps> = ({
  avatar,
  title,
  subtitle,
  duration,
  views,
  author,
  date,
  description,
  image,
}) => {
  const screenSize = useScreenSize();
  const { t } = useTranslation();
  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '24.74rem',
        height: screenSize === 'sm' ? '400px' : '28rem',
        borderRadius: '16px',
        backgroundColor: '#fff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {avatar && (
          <Box
            component="img"
            src={avatar}
            alt={`Avatar for ${title}`}
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
            }}
          />
        )}
        <Box sx={{ flex: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {subtitle}
          </Typography>
        </Box>
        <IconButton size="small">
          <MoreVertIcon />
        </IconButton>
      </Box>

      <Box sx={{ position: 'relative', height: '50%', px: 1 }}>
        <Box
          component="img"
          src={image}
          alt={description}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
        <Typography
          sx={{
            position: 'absolute',
            bottom: 8,
            right: 20,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            color: 'white',
            padding: '2px 8px',
            borderRadius: '4px',
            fontSize: '0.875rem',
          }}
        >
          {duration}
        </Typography>
      </Box>

      <CardContent
        sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
      >
        <Box>
          <Typography variant="h6" sx={{ mb: 1 }}>
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author} · {views} · {date}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <CommonButton
            text={t('resources.access')}
            variantType="secondary-fill"
            sx={{
              width: screenSize === 'sm' ? '75.78px' : '7rem',
              height: '2.2rem',
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MeditationCard;
