import { create } from 'zustand';

interface NotificationsStore {
  hasNotifications: boolean;
  setHasNotifications: (hasNotifications: boolean) => void;
}

export const useNotificationsStore = create<NotificationsStore>((set) => ({
  hasNotifications: false,
  setHasNotifications: (hasNotifications) => set({ hasNotifications }),
}));
