import { supabase } from '@/server/provider';
import { useQuery } from '@tanstack/react-query';
import { AUTH_KEYS } from './keys';

const getSession = async () => {
  const session = await supabase.auth.getSession();

  return session.data.session?.user;
};

export const useUserSession = () => {
  return useQuery({
    queryFn: getSession,
    queryKey: AUTH_KEYS.userSession,
  });
};
