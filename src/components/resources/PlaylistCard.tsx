import { Box, Card, Typography } from '@mui/material';
import type React from 'react';
import { useTranslation } from 'react-i18next';
import CommonButton from '../../commons/CommonButton';
import useScreenSize from '../../hooks/useScreenSize';

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ title, description, image }) => {
  const screenSize = useScreenSize();
  const { t } = useTranslation();

  return (
    <Card
      sx={{
        width: '100%',
        maxWidth: '24.74rem',
        height: screenSize === 'sm' ? '304.34px' : screenSize === 'md' ? '22rem' : '24.94rem',
        maxHeight: '399px',
        borderRadius: '16px',
        backgroundColor: '#fff',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ position: 'relative', height: '50%', overflow: 'hidden', px: 1 }}>
        <Box
          component="img"
          src={image}
          alt={title}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </Box>

      <Box
        sx={{
          p: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '50%',
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              fontWeight: 500,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <CommonButton
            text={t('resources.listen')}
            variantType="secondary-fill"
            sx={{
              width: screenSize === 'sm' ? '75.78px' : '7rem',
              height: '2.2rem',
            }}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default PlaylistCard;
