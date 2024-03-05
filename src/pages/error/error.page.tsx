import { create, props } from '@stylexjs/stylex';

const errorStyles = create({
  content: {
    fontSize: '1.5rem',
  },
});

export const ErrorPage = () => {
  return <main {...props(errorStyles.content)}>Page not exist.</main>;
};
