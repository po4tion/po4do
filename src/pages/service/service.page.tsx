import { useUserSession } from '../../server/auth/queries';
import { useGetTodos } from '../../server/todos/queries';
import { Container } from './components/Container';
import { Title } from './components/Title';
import { Todo } from './components/Todo';
import { getTodayDate } from './utils/getTodayDate';

export const ServicePage = () => {
  const { data: user } = useUserSession();
  const { data } = useGetTodos({
    userId: user?.id,
    createdAt: getTodayDate(),
  });

  if (!data || typeof data === 'boolean') {
    return null;
  }

  return (
    <Container>
      <Title>Today</Title>

      <Todo>
        <Todo.Title>Tasks left</Todo.Title>
        <Todo.List data={data} />
      </Todo>
    </Container>
  );
};
