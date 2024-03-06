import { withSuspense } from '@/hocs/withSuspense';
import { useCreateTodo } from '@/server/todos/mutations';
import { useRemoveTodo } from '@/server/todos/mutations/useRemoveTodo';
import { useUpdateTodo } from '@/server/todos/mutations/useUpdateTodo';
import { TODOS_KEYS } from '@/server/todos/queries/keys';
import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Container } from './components/Container';
import { Title } from './components/Title';
import { Todo } from './components/Todo';
import { Write } from './components/Write';
import { useFetch } from './hooks/useFetch';
import { getTodayDate } from './utils/getTodayDate';

export const ServicePage = withSuspense(() => {
  const { todos, user, queryKey } = useFetch();
  const queryClient = useQueryClient();
  const { mutate: createTodoMutate } = useCreateTodo();
  const [todo, setTodo] = useState('');

  const createTodo = () => {
    if (!user) {
      alert('로그인이 필요합니다');
      return;
    }

    const newTodo: Database.TablesInsert<'todos'> = {
      userId: user.id,
      created_at: getTodayDate(),
      description: todo,
      status: 'progress',
    };

    createTodoMutate(newTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: TODOS_KEYS.todos(queryKey),
        });
      },
    });
  };

  const { mutate: updateTodoMutate } = useUpdateTodo();

  const updateTodo = (
    id: Database.TablesUpdate<'todos'>['id'],
    status: Database.TablesUpdate<'todos'>['status'],
  ) => {
    if (!id) {
      alert('id 값이 유효하지 않습니다.');
      return;
    }

    const updateStatusTodo: Pick<
      Database.TablesUpdate<'todos'>,
      'id' | 'status'
    > = {
      id,
      status: status === 'progress' ? 'done' : 'progress',
    };

    updateTodoMutate(updateStatusTodo, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: TODOS_KEYS.todos(queryKey),
        });
      },
    });
  };

  const { mutate: removeTodoMutate } = useRemoveTodo();

  const removeTodo = (id: Database.TablesUpdate<'todos'>['id']) => {
    removeTodoMutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: TODOS_KEYS.todos(queryKey),
        });
      },
    });
  };

  if (todos) throw new Error('에러 발생!');

  return (
    <Container>
      <Title>Today</Title>

      <Write
        create={createTodo}
        onChange={(event) => setTodo(event.target.value)}
      />

      <Todo>
        <Todo.Title>Tasks left</Todo.Title>
        <Todo.List data={todos} update={updateTodo} remove={removeTodo} />
      </Todo>
    </Container>
  );
});
