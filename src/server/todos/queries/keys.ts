export const TODOS_KEYS = {
  todos: <T extends QueryKey.Todo>(subKeys: T) => ['todos', subKeys],
} as const;
