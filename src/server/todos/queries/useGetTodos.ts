import { useUserSession } from '@/server/auth/queries';
import { supabase } from '@/server/provider';
import { getTodayDate } from '@/utils/getTodayDate';
import { useSuspenseQuery } from '@tanstack/react-query';
import { TODOS_KEYS } from './keys';

const getTodos = async ({ id, created_at }: QueryKey.Todo) => {
  const { data: todos } = await supabase
    .from('todos')
    .select('*')
    .eq('userId', id)
    .gte('created_at', `${created_at} 00:00`)
    .lte('created_at', `${created_at} 23:59`)
    .order('updated_at', { ascending: false });

  return todos ?? [];
};

export const useGetTodos = () => {
  const { data: user } = useUserSession();

  if (!user) {
    throw new Error('로그인이 필요한 기능입니다.');
  }

  const queryParameters: QueryKey.Todo = {
    id: user.id,
    created_at: getTodayDate(),
  };

  return useSuspenseQuery({
    queryFn: () => getTodos(queryParameters),
    queryKey: TODOS_KEYS.todos(queryParameters),
  });
};
