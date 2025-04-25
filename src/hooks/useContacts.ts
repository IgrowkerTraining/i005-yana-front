import { useQuery } from '@tanstack/react-query';
import { contactsService } from '../services/contacts';
import { useAuthStore } from '../store/authStore';
import { useContactsStore } from '../store/contactsStore';

export const useContacts = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const { setContacts } = useContactsStore();

  const query = useQuery({
    queryKey: ['contacts'],
    queryFn: async () => {
      if (!accessToken) throw new Error('No access token available');
      const contacts = await contactsService.getContacts(accessToken);
      setContacts(contacts);
      return contacts;
    },
    enabled: !!accessToken,
    staleTime: 0,
    gcTime: 0,
  });

  return {
    contacts: query.data ?? [],
    isLoading: query.isLoading && !query.data,
    error: query.error,
  };
};
