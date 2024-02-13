import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { List } from './List';
import { Title } from './Title';

const todoStyles = create({
  article: {
    width: '100%',
    minHeight: '15rem',
    height: '20rem',
    maxHeight: '25rem',

    position: 'relative',

    display: 'flex',
    flexDirection: 'column',
    rowGap: '1rem',
  },
});

const Todo = ({ children }: PropsWithChildren) => {
  return <article {...props(todoStyles.article)}>{children}</article>;
};

Todo.Title = Title;
Todo.List = List;

export { Todo };
