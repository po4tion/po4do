import { useMutation } from '@tanstack/react-query';
import type { Database } from '../../database.types';
import { supabase } from '../../provider';

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
