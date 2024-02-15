import { supabase } from '@/server/provider';
import type { User } from '@supabase/supabase-js';
import { useQuery } from '@tanstack/react-query';
import { TODOS_KEYS } from './keys';

type Parameters = {
  userId: User['id'] | undefined;
  createdAt: User['created_at'] | undefined;
};

const getTodos = async ({ userId, createdAt }: Parameters) => {
  if (!userId || !createdAt) {
    return null;
  }

  const { data: todos } = await supabase
    .from('todos')
    .select('*')
    .eq('userId', userId)
    .gte('created_at', `${createdAt} 00:00`)
    .lte('created_at', `${createdAt} 23:59`)
    .order('updated_at', { ascending: false });

  return todos;
};

export const useGetTodos = (parameters: Parameters) => {
  const isEnabled = Boolean(parameters.userId) && Boolean(parameters.createdAt);

  return useQuery({
    queryFn: () => getTodos(parameters),
    queryKey: TODOS_KEYS.todos(parameters),
    enabled: isEnabled,
  });
};
