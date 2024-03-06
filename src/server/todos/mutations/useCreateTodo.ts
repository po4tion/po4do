import { useUserSession } from '@/server/auth/queries';
import { supabase } from '@/server/provider';
import { getTodayDate } from '@/utils/getTodayDate';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { TODOS_KEYS } from '../queries/keys';

const createTodo = async (todo: Database.TablesInsert<'todos'>) => {
  const { data } = await supabase.from('todos').insert([todo]);

  return data;
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  const { data: user } = useUserSession();

  if (!user) {
    throw new Error('로그인이 필요한 기능입니다.');
  }

  return useMutation({
    mutationFn: (
      todo: Omit<Database.TablesInsert<'todos'>, 'userId' | 'created_at'>,
    ) => {
      const todoWithUserId: Database.TablesInsert<'todos'> = {
        ...todo,
        created_at: getTodayDate(),
        userId: user.id,
      };

      return createTodo(todoWithUserId);
    },
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
