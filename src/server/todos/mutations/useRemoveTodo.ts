import { useUserSession } from '@/server/auth/queries';
import { supabase } from '@/server/provider';
import { getTodayDate } from '@/utils/getTodayDate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TODOS_KEYS } from '../queries/keys';

const removeTodo = async (id: Database.TablesUpdate<'todos'>['id']) => {
  try {
    if (!id) {
      throw Error('id가 비어있습니다.');
    }

    await supabase.from('todos').delete().eq('id', id);
  } catch (error) {
    if (error instanceof Error) {
      throw Error(error.message);
    }
  }
};

export const useRemoveTodo = () => {
  const queryClient = useQueryClient();
  const { data: user } = useUserSession();

  if (!user) {
    throw Error('로그인이 필요한 기능입니다.');
  }

  return useMutation({
    mutationFn: removeTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: TODOS_KEYS.todos({
          created_at: getTodayDate(),
          id: user.id,
        }),
      });
    },
  });
};
