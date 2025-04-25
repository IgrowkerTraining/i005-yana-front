import { MESSAGES_ENDPOINTS } from '../config/apiEndpoints';
import { getAuthHeaders, handleApiError } from '../utils/apiUtils';

export const notificationsService = {
  getNotifications: async (accessToken: string | null): Promise<boolean> => {
    if (!accessToken) {
      throw new Error('Access token is required');
    }

    try {
      const response = await fetch(MESSAGES_ENDPOINTS.GET_NOTIFICATIONS, {
        headers: getAuthHeaders(accessToken),
      });

      if (!response.ok) {
        await handleApiError(response);
      }

      return response.json();
    } catch (error) {
      console.error('Get notifications error:', error);
      throw error;
    }
  },
};
