import { supabase } from '@/server/provider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AUTH_KEYS } from '../queries/keys';

const logout = async () => {
  await supabase.auth.signOut();
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: AUTH_KEYS.userSession,
        exact: true,
      });
    },
  });
};
