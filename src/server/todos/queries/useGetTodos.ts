import { useUserSession } from '@/server/auth/queries';
import { supabase } from '@/server/provider';
import type { User } from '@supabase/supabase-js';
import { useSuspenseQuery } from '@tanstack/react-query';
import { TODOS_KEYS } from './keys';

type Parameters = {
  userId: User['id'];
  createdAt: User['created_at'];
};

const getTodos = async ({ userId, createdAt }: Parameters) => {
  const { data: todos } = await supabase
    .from('todos')
    .select('*')
    .eq('userId', userId)
    .gte('created_at', `${createdAt} 00:00`)
    .lte('created_at', `${createdAt} 23:59`)
    .order('updated_at', { ascending: false });

  return todos ?? [];
};

export const useGetTodos = ({ createdAt }: Pick<Parameters, 'createdAt'>) => {
  const { data: user } = useUserSession();

  if (!user) {
    throw new Error('로그인이 필요한 기능입니다.');
  }

  const queryParameters: Parameters = {
    userId: user.id,
    createdAt,
  };

  return useSuspenseQuery({
    queryFn: () => getTodos(queryParameters),
    queryKey: TODOS_KEYS.todos(queryParameters),
  });
};
