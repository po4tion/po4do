import { useGetTodos } from '@/server/todos/queries';
import { getTodayDate } from '../utils/getTodayDate';

export const useFetch = () => {
  const getTodoParameters = {
    createdAt: getTodayDate(),
  };

  const { data: todos } = useGetTodos(getTodoParameters);

  return {
    todos,
    getTodoParameters,
  };
};
