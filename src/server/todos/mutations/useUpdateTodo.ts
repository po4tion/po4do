import { useUserSession } from '@/server/auth/queries';
import { supabase } from '@/server/provider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TODOS_KEYS } from '../queries/keys';

type Parameters = Pick<Database.TablesUpdate<'todos'>, 'id' | 'status'>;

const updateTodo = async ({ id, status }: Parameters) => {
  try {
    if (!id) {
      throw Error('id 값이 비어있습니다.');
    }

    if (!status) {
      throw Error('status 값이 비어있습니다.');
    }

    await supabase.from('todos').update({ status }).eq('id', id).select();
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message);
    }
  }
};

export const useUpdateTodo = () => {
  const queryClient = useQueryClient();
  const { data: user } = useUserSession();

  if (!user) {
    throw Error('로그인이 필요한 기능입니다.');
  }

  return useMutation({
    mutationFn: updateTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TODOS_KEYS.todos({
          id: '',
          created_at: '',
        }),
      });
    },
  });
};
