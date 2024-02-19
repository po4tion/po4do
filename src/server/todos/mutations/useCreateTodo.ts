import { supabase } from '@/server/provider';
import { useMutation } from '@tanstack/react-query';

const createTodo = async (todo: Database.TablesInsert<'todos'>) => {
  const { data } = await supabase.from('todos').insert([todo]);

  return data;
};

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: createTodo,
  });
};
