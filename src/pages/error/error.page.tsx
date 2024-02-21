import { create } from '@stylexjs/stylex';
import { NotFound } from './components/NotFound';

const errorStyles = create({
  notFound: {
    width: '40rem',
    aspectRatio: 1 / 1,
  },
});

export const ErrorPage = () => {
  return (
    <div>
      <NotFound style={errorStyles.notFound} />
    </div>
  );
};
