import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Box, CircularProgress, Typography } from '@mui/material';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import marker from '../assets/icons/marker.svg?url';
import { MAP_TILER_KEY } from '../config/env';
import { useNearbyEmotions } from '../hooks/useNearbyEmotions';
import { useNonPersistentEmotionsStore } from '../store/emotionsStore';
import { useUserLocationStore } from '../store/userLocationStore';
import theme from '../theme';
import { getUserLocation } from '../utils/getUserLocation';
import { clearMarkers, renderEmotionMarkers } from '../utils/renderEmotionMarkers';
import MarkerModal from './MarkerModal';

export const MapView = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => setModalOpen(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { userLocation, setUserLocation } = useUserLocationStore();
  const lastSelectedEmotion = useNonPersistentEmotionsStore((state) => state.lastSelectedEmotion);
  const mapRef = useRef<maplibregl.Map | null>(null);
  const markersRef = useRef<maplibregl.Marker[]>([]);
  const [isCreatingEmotion, setIsCreatingEmotion] = useState(false);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [modalUserId, setModalUserId] = useState<string | null>(null);
  const [sharedEmotionId, setSharedEmotionId] = useState<number | null>(null);

  const openModal = useCallback((userId: string) => {
    setModalUserId(userId);
    setModalOpen(true);
  }, []);

  const { data, isLoading, isError, isRefetching } = useNearbyEmotions({
    latitude: userLocation?.latitude?.toString() || '',
    longitude: userLocation?.longitude?.toString() || '',
  });

  const isVisible = location.pathname === '/';

  // Show loading state when either creating emotion or fetching nearby emotions
  useEffect(() => {
    if (lastSelectedEmotion) {
      setIsCreatingEmotion(true);
    }
  }, [lastSelectedEmotion]);

  useEffect(() => {
    if (!isRefetching && !isLoading) {
      setIsCreatingEmotion(false);
    }
  }, [isRefetching, isLoading]);

  useEffect(() => {
    if (isVisible) {
      getUserLocation()
        .then(([latitude, longitude]) => {
          setUserLocation(latitude, longitude);
        })
        .catch((error) => {
          console.error('Error al obtener la ubicación:', error);
        });
    }
  }, [setUserLocation, isVisible]);

  useEffect(() => {
    if (
      userLocation &&
      userLocation.latitude !== null &&
      userLocation.longitude !== null &&
      !mapRef.current &&
      isVisible
    ) {
      mapRef.current = new maplibregl.Map({
        container: 'map',
        style: `https://api.maptiler.com/maps/0195fe03-6eea-79e3-a9d3-d4531a0a351b/style.json?key=${MAP_TILER_KEY}`,
        center: [userLocation.longitude, userLocation.latitude],
        zoom: 15,
      });

      mapRef.current.on('styleimagemissing', (e) => {
        console.warn(`Style image missing: ${e.id}`);
      });

      new maplibregl.Marker({
        element: (() => {
          const el = document.createElement('div');
          el.innerHTML = `<img src="${marker}" alt="marker" style="width: 48px; height: 48px; z-index: 2;" />`;
          return el;
        })(),
        anchor: 'bottom',
      })
        .setLngLat([userLocation.longitude, userLocation.latitude])
        .addTo(mapRef.current);

      mapRef.current.on('click', (e) => {
        const { lng, lat } = e.lngLat;
        if (mapRef.current) {
          const pixelPosition = mapRef.current.project([lng, lat]);
          setPosition({ x: pixelPosition.x, y: pixelPosition.y });
        }
      });
    }
  }, [userLocation, isVisible]);

  // Handle data updates and marker rendering
  useEffect(() => {
    if (data && mapRef.current && lastSelectedEmotion) {
      const sharedEmotionId = data[0]?.shared_emotion_id;
      setSharedEmotionId(sharedEmotionId);
      renderEmotionMarkers(data, mapRef, markersRef, openModal);
    } else if (!lastSelectedEmotion) {
      clearMarkers(markersRef);
    }
  }, [data, lastSelectedEmotion, openModal]);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
      clearMarkers(markersRef);
    };
  }, []);

  return (
    <div>
      <div
        id="map"
        style={{
          width: '100vw',
          height: '100vh',
          position: 'fixed',
          zIndex: -1,
          display: isVisible ? 'block' : 'none',
          filter: isRefetching || isCreatingEmotion ? 'blur(5px)' : 'none',
          transition: 'filter 0.3s ease-in-out',
        }}
      />
      {isVisible && (isLoading || isRefetching || isCreatingEmotion) && (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            backgroundColor: 'rgba(62, 62, 62, 0.8)',
            padding: '2rem',
            borderRadius: '1.875rem',
            border: '1px solid #FFFFFF',
            zIndex: 999,
          }}
        >
          <CircularProgress sx={{ color: '#FFFFFF' }} />
          <Typography
            variant="h6"
            sx={{
              color: '#FFFFFF',
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {t('map.loadingEmotions')}
          </Typography>
        </Box>
      )}
      {isVisible && isError && (
        <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            backgroundColor: 'rgba(62, 62, 62, 0.8)',
            padding: '2rem',
            borderRadius: '1.875rem',
            border: '1px solid #FFFFFF',
            zIndex: 999,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: theme.colors.lightRed,
              textAlign: 'center',
              fontWeight: 'bold',
            }}
          >
            {t('map.errorLoadingEmotions')}
          </Typography>
        </Box>
      )}

      <MarkerModal
        open={modalOpen}
        onClose={closeModal}
        position={position}
        userId={modalUserId}
        sharedEmotion={sharedEmotionId}
      />
    </div>
  );
};
