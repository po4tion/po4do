import { supabase } from '@/server/provider';
import { useMutation } from '@tanstack/react-query';

const removeTodo = async (id: Database.TablesUpdate<'todos'>['id']) => {
  try {
    if (!id) {
      throw new Error('id가 비어있습니다.');
    }

    await supabase.from('todos').delete().eq('id', id);
  } catch (error) {
    console.error(error);
  }
};

export const useRemoveTodo = () => {
  return useMutation({
    mutationFn: removeTodo,
  });
};
