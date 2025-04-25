import { EMOTIONS_ENDPOINTS, MESSAGES_ENDPOINTS } from '../config/apiEndpoints';

export interface CreateEmotionRequest {
  emotion_id: string;
  latitude: number;
  longitude: number;
}

export interface CreateEmotionResponse {
  id: string;
  emotion_id: string;
  userId: string;
  latitude: number;
  longitude: number;
  createdAt: string;
  updatedAt: string;
}

export interface AvailableEmotion {
  id: string;
  name: string;
}

export interface LastEmotionResponse {
  emotion: string;
  latitude: number;
  longitude: number;
  created_at: string;
  is_active: boolean;
}

export interface SendSupportRequest {
  shared_emotion: number | null;
  template_id: number;
}

export interface SendSupportResponse {
  message: string;
}

export interface SupportMessageTemplate {
  id: number;
  text: string;
}

export const emotionsService = {
  createEmotion: async (
    data: CreateEmotionRequest,
    accessToken: string
  ): Promise<CreateEmotionResponse> => {
    try {
      const response = await fetch(EMOTIONS_ENDPOINTS.CREATE_EMOTION, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to create emotion');
      }

      return responseData;
    } catch (error) {
      console.error('Create emotion error:', error);
      throw error;
    }
  },

  getAvailableEmotions: async (accessToken: string): Promise<AvailableEmotion[]> => {
    try {
      const response = await fetch(EMOTIONS_ENDPOINTS.GET_AVAILABLE_EMOTIONS, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to get available emotions');
      }

      return responseData;
    } catch (error) {
      console.error('Get available emotions error:', error);
      throw error;
    }
  },

  getLastEmotion: async (accessToken: string): Promise<LastEmotionResponse | null> => {
    try {
      const response = await fetch(EMOTIONS_ENDPOINTS.GET_LAST_EMOTION, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status === 404) {
        return null;
      }

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to get last emotion');
      }

      return responseData;
    } catch (error) {
      console.error('Get last emotion error:', error);
      throw error;
    }
  },

  sendSupport: async (
    data: SendSupportRequest,
    accessToken: string
  ): Promise<SendSupportResponse> => {
    try {
      const response = await fetch(MESSAGES_ENDPOINTS.SEND_SUPPORT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to send support');
      }

      return responseData;
    } catch (error) {
      console.error('Send support error:', error);
      throw error;
    }
  },

  getTemplateMessages: async (accessToken: string): Promise<SupportMessageTemplate[]> => {
    try {
      const response = await fetch(MESSAGES_ENDPOINTS.GET_TEMPLATE_MESSAGES, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.message || 'Failed to get template messages');
      }

      return responseData;
    } catch (error) {
      console.error('Get template messages error:', error);
      throw error;
    }
  },
};
