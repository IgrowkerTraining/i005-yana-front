import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Contact } from '../services/contacts';

interface ContactsState {
  contacts: Contact[];
  setContacts: (contacts: Contact[]) => void;
}

export const useContactsStore = create<ContactsState>()(
  persist(
    (set) => ({
      contacts: [],
      setContacts: (contacts) => set({ contacts }),
    }),
    {
      name: 'contacts-storage',
    }
  )
);
