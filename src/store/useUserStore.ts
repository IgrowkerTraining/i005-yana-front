import { create } from "zustand";

interface UserState {
  username: string;
  setUsername: (name: string) => void;
  clearUsername: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  username: "Usuario",
  setUsername: (name) => set({ username: name }),
  clearUsername: () => set({ username: "" }),
}));
