import { supabase } from '../provider';

export const useLogin = () => {
  const login = async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: 'github',
    });

    return data;
  };

  return { login };
};
