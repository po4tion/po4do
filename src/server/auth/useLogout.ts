import { supabase } from '../provider';

export const useLogout = () => {
  const logout = async () => {
    await supabase.auth.signOut();
  };

  return { logout };
};
