import { useMutation } from '@tanstack/react-query';
import { supabase } from '../provider';

const logout = async () => {
  await supabase.auth.signOut();
};

export const useLogout = () => {
  return useMutation({
    mutationFn: logout,
  });
};
