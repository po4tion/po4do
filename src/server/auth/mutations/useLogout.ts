import { useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '../../provider';
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
