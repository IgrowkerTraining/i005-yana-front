import { create } from "zustand"
import { persist } from "zustand/middleware"

interface MuteSettings {
  duration: "1h" | "24h"
  createdAt: number
}

interface Settings {
  mode: "dark" | "light"
  appSounds: boolean
  fontSize: "small" | "large"
  saveHistory: boolean
  hideStatus: boolean
  mute: MuteSettings | null
  notifications: boolean
  customization: string
  avatar: number
}

interface SettingsStore {
  settings: Settings
  updateSetting: <K extends keyof Settings>(key: K, value: Settings[K]) => void
}

const defaultSettings: Settings = {
  mode: "dark",
  appSounds: true,
  fontSize: "small",
  saveHistory: true,
  hideStatus: false,
  mute: null,
  notifications: true,
  customization: "lightBlue",
  avatar: 34,
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      settings: defaultSettings,
      updateSetting: (key, value) =>
        set((state) => {
          if (key === "mute" && value) {
            return {
              settings: {
                ...state.settings,
                [key]: { duration: value as "1h" | "24h", createdAt: Date.now() },
              },
            }
          }
          return {
            settings: {
              ...state.settings,
              [key]: value,
            },
          }
        }),
    }),
    {
      name: "settings-storage",
    }
  )
)
