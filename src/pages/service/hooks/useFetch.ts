import { useUserSession } from '../../../server/auth/queries';
import { useGetTodos } from '../../../server/todos/queries';
import { getTodayDate } from '../utils/getTodayDate';

export const useFetch = () => {
  const { data: user, isLoading: userIsLoading } = useUserSession();

  if (!user) {
    return { todos: null, user: null, isLoading: userIsLoading };
  }

  const queryKey = {
    userId: user.id,
    createdAt: getTodayDate(),
  };

  const { data: todos, isLoading: todosIsLoading } = useGetTodos(queryKey);

  return {
    todos,
    user,
    isLoading: todosIsLoading,
    queryKey,
  };
};
