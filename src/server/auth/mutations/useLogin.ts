import { supabase } from '@/server/provider';
import type { Provider } from '@supabase/supabase-js';
import { useMutation } from '@tanstack/react-query';

const loginGithub = async (provider: Provider) => {
  const { data } = await supabase.auth.signInWithOAuth({
    provider,
  });

  return data;
};

export const useLogin = () => {
  return useMutation({
    mutationFn: loginGithub,
  });
};
