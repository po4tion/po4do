import { useMutation } from '@tanstack/react-query';
import type { Database } from '../../database.types';
import { supabase } from '../../provider';

const removeTodo = async (
  id: Database['public']['Tables']['todos']['Update']['id'],
) => {
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
