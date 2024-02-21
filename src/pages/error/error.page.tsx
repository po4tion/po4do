import { Button, Link } from '@/components/Button';
import { create, props } from '@stylexjs/stylex';
import { useNavigate } from 'react-router-dom';
import { NotFound } from './components/NotFound';

const errorStyles = create({
  container: {
    width: '40rem',
  },
  notFound: {
    width: '100%',
    aspectRatio: 1 / 1,
  },
  buttonGroup: {
    width: '100%',

    display: 'flex',
    columnGap: '2rem',
  },
  link: {
    background: 'hsl(344deg 90.8% 74.3%)',
  },
});

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div {...props(errorStyles.container)}>
      <NotFound style={errorStyles.notFound} />
      <div {...props(errorStyles.buttonGroup)}>
        <Button type="button" onClick={() => navigate(-1)}>
          Back
        </Button>

        <Link to="/" replace style={errorStyles.link}>
          Home
        </Link>
      </div>
    </div>
  );
};
