import { Box, Button, Typography } from '@mui/material';
import type React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';
import banner from '../../assets/resources/banner.webp';
import binaur from '../../assets/resources/binaur.webp';
import { useResourcesData } from '../../data/resourcesData';
import useScreenSize from '../../hooks/useScreenSize';
import theme from '../../theme';
import MeditationCard from './MeditationCard';
import PlaylistCard from './PlaylistCard';
import PodcastCard from './PodcastCard';

const ResourcesComponent: React.FC = () => {
  const screenSize = useScreenSize();
  const { meditationData, podcastData, playlistData } = useResourcesData();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        padding:
          screenSize === 'sm'
            ? '6rem 1rem 8rem 1rem'
            : screenSize === 'md'
              ? '6rem 3rem 1rem calc(${theme.sidebar?.width} + 3rem)'
              : `7.5rem 6rem 3.13rem calc(${theme.sidebar?.width} + 6rem)`,
        backgroundColor: theme.colors.blackBackground,
        color: '#fff',
      }}
    >
      {/* Meditaciones */}
      <Box>
        <Typography
          sx={{
            marginBottom: 2,
            typography: screenSize === 'sm' ? 'h4' : screenSize === 'md' ? 'h3' : 'h1',
          }}
        >
          {t('resources.meditation.title')}
        </Typography>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={screenSize === 'sm' ? 8 : screenSize === 'md' ? 12 : 16}
          slidesPerView={
            screenSize === 'sm' ? 1 : screenSize === 'md' ? 2 : screenSize === 'lg' ? 3 : 4
          }
          navigation={screenSize === 'lg'}
          pagination={{
            clickable: true,
            el: '.meditation-pagination',
            enabled: screenSize === 'sm' || screenSize === 'md',
          }}
        >
          {meditationData.map((meditation) => (
            <SwiperSlide
              key={meditation.id}
              style={{
                width: 'auto',
              }}
            >
              <MeditationCard
                avatar={meditation.avatar ?? ''}
                title={meditation.title}
                subtitle={meditation.subtitle}
                duration={meditation.duration}
                views={meditation.views}
                author={meditation.author}
                date={meditation.date}
                description={meditation.description}
                id={meditation.id}
                image={meditation.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {(screenSize === 'sm' || screenSize === 'md') && (
          <Box
            className="meditation-pagination"
            sx={{
              marginTop: '1.5rem',
              justifyContent: 'center',
              display: 'flex',
              gap: 1,
              '& .swiper-pagination-bullet': {
                backgroundColor: theme.colors.lightGray,
                opacity: 0.7,
                width: '8px',
                height: '8px',
              },
              '& .swiper-pagination-bullet-active': {
                backgroundColor: 'gray',
              },
            }}
          />
        )}
      </Box>

      {/* Podcasts */}
      <Box sx={{ marginBottom: 4, marginTop: '2rem', height: 'auto' }}>
        <Typography
          sx={{
            marginBottom: 2,
            typography: screenSize === 'sm' ? 'h4' : screenSize === 'md' ? 'h3' : 'h1',
          }}
        >
          Podcasts
          <Typography
            component="span"
            variant="body1"
            sx={{ color: theme.colors.lightGray, marginLeft: '0.5rem' }}
          >
            {t('resources.podcast.recommended')}
          </Typography>
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              lg: '1fr 1fr',
            },
            gap: 2,
          }}
        >
          {podcastData.map((podcast) => (
            <PodcastCard
              key={podcast.id}
              avatar={podcast.avatar ?? ''}
              title={podcast.title}
              description={podcast.description}
              image={podcast.image}
            />
          ))}
        </Box>
      </Box>

      {/* Playlists */}
      <Box sx={{ marginBottom: 4, marginTop: '2rem' }}>
        <Typography
          sx={{
            marginBottom: 2,
            typography: screenSize === 'sm' ? 'h4' : screenSize === 'md' ? 'h3' : 'h1',
          }}
        >
          Playlists
        </Typography>

        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={screenSize === 'sm' ? 8 : screenSize === 'md' ? 12 : 16}
          slidesPerView={
            screenSize === 'sm' ? 1 : screenSize === 'md' ? 2 : screenSize === 'lg' ? 3 : 4
          }
          navigation={screenSize === 'lg'}
          pagination={{
            clickable: true,
            el: '.playlist-pagination',
            enabled: screenSize === 'sm' || screenSize === 'md',
          }}
        >
          {playlistData.map((playlist) => (
            <SwiperSlide
              key={playlist.id}
              style={{
                width: 'auto',
              }}
            >
              <PlaylistCard
                title={playlist.title}
                description={playlist.description}
                image={playlist.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {(screenSize === 'sm' || screenSize === 'md') && (
          <Box
            className="playlist-pagination"
            sx={{
              marginTop: '1.5rem',
              justifyContent: 'center',
              display: 'flex',
              gap: 1,
              '& .swiper-pagination-bullet': {
                backgroundColor: theme.colors.lightGray,
                opacity: 0.7,
                width: '8px',
                height: '8px',
              },
              '& .swiper-pagination-bullet-active': {
                backgroundColor: 'gray',
              },
            }}
          />
        )}
      </Box>

      {/* Banner */}
      <Box
        sx={{
          width: '100%',
          height: screenSize === 'sm' ? '7.5rem' : screenSize === 'md' ? '18rem' : '26.47rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          padding:
            screenSize === 'sm'
              ? '0.5rem 1rem'
              : screenSize === 'md'
                ? '2rem 1rem 3rem 4rem'
                : '2.34rem 1rem 4.22rem 6.13rem',
          marginTop: screenSize === 'sm' ? '2rem' : '4rem',
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          borderRadius: '10px',
        }}
      >
        <Box
          sx={{
            width: screenSize === 'lg' || screenSize === 'xl' ? '25%' : '60%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            margin:
              screenSize === 'sm'
                ? 0
                : screenSize === 'md'
                  ? '2rem 2rem 3rem 4rem'
                  : '3rem 3rem 4rem 6rem',
            gap: screenSize === 'sm' ? '0.1rem' : '1.5rem',
          }}
        >
          <Typography
            sx={{
              typography: screenSize === 'sm' ? 'body1' : screenSize === 'md' ? 'h3' : 'h1',
            }}
          >
            {t('resources.binaurapp.title')}
          </Typography>
          <Typography
            sx={{
              typography: screenSize === 'sm' ? 'body3' : screenSize === 'md' ? 'h6' : 'h3',
            }}
          >
            {t('resources.binaurapp.subtitle')}
          </Typography>
          <Button
            component="a"
            href="https://binaurapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              width: screenSize === 'sm' ? '69.33px' : screenSize === 'md' ? '180px' : '254px',
              height: screenSize === 'sm' ? '15.83px' : screenSize === 'md' ? '35px' : '58px',
              borderRadius: screenSize === 'sm' ? '27.3px' : '6.25rem',
              border: screenSize === 'sm' ? '0.27px solid #FFFFFF' : '1px solid #fff',
              backgroundColor: 'transparent',
              color: '#fff',
              textTransform: 'none',
              fontSize: screenSize === 'sm' ? '4.37px' : screenSize === 'md' ? '12px' : '16px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            {t('resources.binaurapp.button')}
          </Button>
        </Box>
        <Box
          component="a"
          href="https://binaurapp.com/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            width: '25%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent',
            color: '#fff',
            textTransform: 'none',
            fontSize: '16px',
            fontWeight: 'bold',
            textDecoration: 'none',
          }}
        >
          <Box
            component="img"
            src={binaur}
            alt="binaurapp"
            sx={{
              width: screenSize === 'sm' ? '58.96px' : screenSize === 'md' ? '7.5rem' : '80%',
              height: screenSize === 'sm' ? '58.96px' : screenSize === 'md' ? '7.5rem' : '80%',
            }}
          />
          <Typography
            sx={{
              textAlign: 'center',
              typography: screenSize === 'sm' ? 'body1' : screenSize === 'md' ? 'h6' : 'h4',
            }}
          >
            Binaurapp
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ResourcesComponent;
