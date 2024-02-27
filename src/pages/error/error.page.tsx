import { Button, Link } from '@/components/Button';
import { create, props } from '@stylexjs/stylex';
import { useNavigate } from 'react-router-dom';
import { NavigationButtonGroup } from './components/NavigationButtonGroup';
import { NotFound } from './components/NotFound';
import { Title } from './components/Title';

const errorStyles = create({
  container: {
    width: '35rem',
  },

  notFound: {
    width: '100%',
    aspectRatio: 1 / 1,
  },

  link: {
    background: 'hsl(344deg 90.8% 74.3%)',
  },
});

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <main {...props(errorStyles.container)}>
      <Title>Oops! Something went wrong!</Title>

      <NotFound style={errorStyles.notFound} />

      <NavigationButtonGroup>
        <Button type="button" onClick={() => navigate(-1)}>
          Back
        </Button>

        <Link to="/" replace style={errorStyles.link}>
          Home
        </Link>
      </NavigationButtonGroup>
    </main>
  );
};
