import { create, props } from '@stylexjs/stylex';
import type { FallbackProps } from 'react-error-boundary';
import { Button, Link } from '../Button';
import { NavigationButtonGroup } from './NavigationButtonGroup';
import { NotFound } from './NotFound';
import { Title } from './Title';

const fallbackRenderStyles = create({
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

export const FallbackRender = ({ resetErrorBoundary }: FallbackProps) => {
  return (
    <main {...props(fallbackRenderStyles.container)}>
      <Title>Oops! Something went wrong!</Title>

      <NotFound style={fallbackRenderStyles.notFound} />

      <NavigationButtonGroup>
        <Button type="button" onClick={resetErrorBoundary}>
          Retry
        </Button>

        <Link to="/" replace style={fallbackRenderStyles.link}>
          Home
        </Link>
      </NavigationButtonGroup>
    </main>
  );
};
