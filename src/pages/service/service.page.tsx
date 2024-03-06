import { withSuspense } from '@/hocs/withSuspense';
import { useCreateTodo } from '@/server/todos/mutations';
import { useRemoveTodo } from '@/server/todos/mutations/useRemoveTodo';
import { useUpdateTodo } from '@/server/todos/mutations/useUpdateTodo';
import { useGetTodos } from '@/server/todos/queries';
import { TODOS_KEYS } from '@/server/todos/queries/keys';
import { useState, type ComponentProps } from 'react';
import { Container } from './components/Container';
import { Title } from './components/Title';
import { Todo } from './components/Todo';
import { Write } from './components/Write';

export const ServicePage = withSuspense(() => {
  const { data: todos } = useGetTodos();
  const [todo, setTodo] = useState('');

  const { mutate: createTodoMutate } = useCreateTodo();
  const createTodo = () => {
    createTodoMutate({
      description: todo,
      status: 'progress',
    });
  };

  const { mutate: updateTodoMutate } = useUpdateTodo();
  const updateTodo: ComponentProps<typeof Todo.List>['update'] = (
    id,
    status,
  ) => {
    updateTodoMutate({
      id,
      status: status === 'progress' ? 'done' : 'progress',
    });
  };

  const { mutate: removeTodoMutate } = useRemoveTodo();
  const removeTodo = (id: Database.TablesUpdate<'todos'>['id']) => {
    removeTodoMutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: TODOS_KEYS.todos(getTodoParameters),
        });
      },
    });
  };

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
