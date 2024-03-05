import { create, props } from '@stylexjs/stylex';
import { useNavigate } from 'react-router-dom';

const errorStyles = create({
  content: {
    fontSize: '1.5rem',
  },
});

export const ErrorPage = () => {
  const navigate = useNavigate();

  return <main {...props(errorStyles.content)}>Page not exist.</main>;
};
