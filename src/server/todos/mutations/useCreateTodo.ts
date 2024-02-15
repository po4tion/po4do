import type { Database } from '@/server/database.types';
import { supabase } from '@/server/provider';
import { useMutation } from '@tanstack/react-query';

const createTodo = async (
  todo: Database['public']['Tables']['todos']['Insert'],
) => {
  const { data } = await supabase.from('todos').insert([todo]);

  return data;
};

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: createTodo,
  });
};
