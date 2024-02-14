import { create, props } from '@stylexjs/stylex';
import type { FormEventHandler, InputHTMLAttributes } from 'react';

const writeStyles = create({
  form: {
    width: '100%',
  },

  input: {
    width: '100%',

    padding: '0.5rem 1.5rem',

    border: 0,
    borderBottom: '1px solid hsl(0deg 0% 80%)',
    borderTopRightRadius: '0.1rem',
    borderTopLeftRadius: '0.1rem',
    outlineColor: 'hsl(120deg 100% 30%)',

    fontSize: '1rem',
  },
});

type Props = {
  onChange: InputHTMLAttributes<HTMLInputElement>['onChange'];
  create: VoidFunction;
};

export const Write = ({ create, onChange }: Props) => {
  const onTodoSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    create();
  };

  return (
    <form onSubmit={onTodoSubmit} {...props(writeStyles.form)}>
      <input type="text" onChange={onChange} {...props(writeStyles.input)} />
    </form>
  );
};
