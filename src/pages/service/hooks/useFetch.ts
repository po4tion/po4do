import { useUserSession } from '@/server/auth/queries';
import { useGetTodos } from '@/server/todos/queries';
import { getTodayDate } from '../utils/getTodayDate';

export const useFetch = () => {
  const { data: user } = useUserSession();

  if (!user) {
    return { todos: [], user: null };
  }

  const queryKey = {
    userId: user.id,
    createdAt: getTodayDate(),
  };

  const { data: todos } = useGetTodos(queryKey);

  return {
    todos,
    user,
    queryKey,
  };
};
