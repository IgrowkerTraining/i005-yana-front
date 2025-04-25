import { API_URL } from './env';

// Auth endpoints
export const AUTH_ENDPOINTS = {
  REGISTER: `${API_URL}/usuario/api/register/`,
  LOGIN: `${API_URL}/usuario/api/login/`,
  LOGOUT: `${API_URL}/usuario/api/logout/`,
  CHECK_EMAIL: `${API_URL}/usuario/api/check-email/`,
  REFRESH_TOKEN: `${API_URL}/usuario/api/token/refresh/`,
  UPDATE_AVATAR: `${API_URL}/usuario/api/update-avatar/`,
  DELETE_ACCOUNT: `${API_URL}/usuario/api/delete-account/`,
  PASSWORD_RESET: `${API_URL}/usuario/api/password/reset/`,
  PASSWORD_RESET_CONFIRM: `${API_URL}/usuario/api/password/reset/confirm/`,
} as const;

// Emotions endpoints
export const EMOTIONS_ENDPOINTS = {
  CREATE_EMOTION: `${API_URL}/emociones/user/emotions/create/`,
  GET_AVAILABLE_EMOTIONS: `${API_URL}/emociones/emotions/available/`,
  GET_LAST_EMOTION: `${API_URL}/emociones/user/emotions/last/`,
  GET_NEARBY_EMOTIONS: `${API_URL}/emociones/api/nearby-emotions/`,
} as const;

// Messages endpoints
export const MESSAGES_ENDPOINTS = {
  SEND_SUPPORT: `${API_URL}/mensajes/api/send-support/`,
  GET_TEMPLATE_MESSAGES: `${API_URL}/mensajes/templates/`,
  GET_NOTIFICATIONS: `${API_URL}/mensajes/api/notifications/`,
} as const;

// Resources endpoints
export const RESOURCES_ENDPOINTS = {
  GET_RESOURCES: `${API_URL}/recursos/api/resources/`,
} as const;
