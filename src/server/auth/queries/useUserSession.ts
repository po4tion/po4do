import { supabase } from '@/server/provider';
import { useSuspenseQuery } from '@tanstack/react-query';
import { AUTH_KEYS } from './keys';

const getSession = async () => {
  const session = await supabase.auth.getSession();

  return session.data.session?.user;
};

export const useUserSession = () => {
  return useSuspenseQuery({
    queryFn: getSession,
    queryKey: AUTH_KEYS.userSession,
  });
};
