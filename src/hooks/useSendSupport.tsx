import { useMutation } from '@tanstack/react-query';
import { emotionsService } from '../services/emotions';
import { useAuthStore } from '../store/authStore';

export const useSendSupport = () => {
  const accessToken = useAuthStore((state) => state.accessToken);

  if (!accessToken) {
    throw new Error('No access token available');
  }

  return useMutation({
    mutationFn: (data: { shared_emotion: number | null; template_id: number }) =>
      emotionsService.sendSupport(data, accessToken),
  });
};
