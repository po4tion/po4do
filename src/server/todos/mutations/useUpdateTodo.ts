import type { Database } from '@/server/database.types';
import { supabase } from '@/server/provider';
import { useMutation } from '@tanstack/react-query';

type Parameters = {
  status: Database['public']['Tables']['todos']['Update']['status'];
  id: Database['public']['Tables']['todos']['Update']['id'];
};

const updateTodo = async ({ id, status }: Parameters) => {
  try {
    if (!id) {
      throw new Error('id 값이 비어있습니다.');
    }

    if (!status) {
      throw new Error('status 값이 비어있습니다.');
    }

    await supabase.from('todos').update({ status }).eq('id', id).select();
  } catch (error) {
    console.error(error);
  }
};

export const useUpdateTodo = () => {
  return useMutation({
    mutationFn: updateTodo,
  });
};
