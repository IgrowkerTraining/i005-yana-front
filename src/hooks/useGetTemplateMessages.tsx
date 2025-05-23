import { useQuery } from '@tanstack/react-query';
import { emotionsService } from '../services/emotions';
import { useAuthStore } from '../store/authStore';

export const useGetTemplateMessages = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  if (!accessToken) {
    throw new Error('Access token required');
  }

  return useQuery({
    queryKey: ['templateMessages'],
    queryFn: () => emotionsService.getTemplateMessages(accessToken),
    enabled: !!accessToken,
    gcTime: 0,
  });
};
