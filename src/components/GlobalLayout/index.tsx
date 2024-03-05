import { flex } from '@/styles/common';
import { create, props } from '@stylexjs/stylex';
import { forwardRef } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Outlet } from 'react-router-dom';
import { FallbackRender } from '../FallbackRender';

const globalLayoutStyles = create({
  main: {
    minHeight: '100vh',

    background: 'hsl(220deg 14.3% 95.9%)',
  },
});

export const GlobalLayout = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div ref={ref} {...props(globalLayoutStyles.main, flex.center)}>
      <ErrorBoundary fallbackRender={FallbackRender}>
        <Outlet />
      </ErrorBoundary>
    </div>
  );
});
