import { useQuery } from '@tanstack/react-query';
import { EMOTIONS_ENDPOINTS } from '../config/apiEndpoints';
import { useAuthStore } from '../store/authStore';
import { getAuthHeaders } from '../utils/apiUtils';

interface Props {
  latitude: string;
  longitude: string;
}

const fetchNearbyEmotions = async ({ latitude, longitude }: Props, accessToken: string) => {
  const url = new URL(EMOTIONS_ENDPOINTS.GET_NEARBY_EMOTIONS);
  url.searchParams.set('latitude', latitude);
  url.searchParams.set('longitude', longitude);
  url.searchParams.set('radius', '20000');

  const res = await fetch(url.toString(), {
    headers: getAuthHeaders(accessToken),
  });

  if (!res.ok) {
    throw new Error('Error getting emotions');
  }

  const data = await res.json();

  // Filter emotions that are less than 24 hours old
  const twentyFourHoursAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
  const recentEmotions = data.filter((emotion: { created_at: string }) => {
    const emotionDate = new Date(emotion.created_at);
    return emotionDate > twentyFourHoursAgo;
  });

  return recentEmotions;
};

export const useNearbyEmotions = ({ latitude, longitude }: Props) => {
  const accessToken = useAuthStore((state) => state.accessToken);

  const query = useQuery({
    queryKey: ['nearbyEmotions', latitude, longitude],
    queryFn: () => fetchNearbyEmotions({ latitude, longitude }, accessToken ?? ''),
    enabled: false, // Disable automatic fetching
    gcTime: 0, // Don't cache the results
  });

  return query;
};
