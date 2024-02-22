import { Button, Link } from '@/components/Button';
import { create, props } from '@stylexjs/stylex';
import { useNavigate } from 'react-router-dom';
import { NavigationButtonGroup } from './components/NavigationButtonGroup';
import { NotFound } from './components/NotFound';

const errorStyles = create({
  container: {
    width: '40rem',
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
      {/* Title 만들어야 함 */}

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
