import { Box, Card, CardContent, Typography } from '@mui/material';
import type React from 'react';
import useScreenSize from '../../hooks/useScreenSize';

interface PodcastCardProps {
  avatar: string;
  title: string;
  description: string;
  image: string;
}

const PodcastCard: React.FC<PodcastCardProps> = ({ avatar, title, description, image }) => {
  const screenSize = useScreenSize();

  return (
    <Card
      sx={{
        width: screenSize === 'sm' ? '100%' : screenSize === 'md' ? '100%' : '100%',
        height: screenSize === 'sm' ? '80px' : screenSize === 'md' ? '6.5rem' : '7.52rem',
        borderRadius: '1.13rem',
        backgroundColor: '#f5f5f5',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        padding: '0.5rem 0 0.5rem 0.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: '0.5rem',
      }}
    >
      <Box
        component="img"
        src={avatar}
        alt={`Avatar for ${title}`}
        sx={{
          width: '60.2px',
          height: '60.2px',
          marginRight: '1rem',
          objectFit: 'cover',
          borderRadius: '50%',
        }}
      />

      <CardContent
        sx={{
          flex: 1,
          padding: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            color: '#333',
            fontWeight: 'bold',
            textAlign: 'left',
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#757575',
            textAlign: 'left',
          }}
        >
          {description}
        </Typography>
      </CardContent>

      <Box
        component="img"
        src={image}
        alt={`Image for ${title}`}
        sx={{
          width: '120.39px',
          height: '122.18px',
          objectFit: 'cover',
          borderRadius: '8px',
        }}
      />
    </Card>
  );
};

export default PodcastCard;
