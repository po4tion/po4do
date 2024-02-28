import { Loading } from '@/components/Loading';
import { create } from '@stylexjs/stylex';
import { Suspense, type FC, type ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const suspenseFallback = create({
  loading: {
    width: '20rem',
  },
});

type WithSuspense = <P extends object>(
  Component: FC<P>,
  Fallback?: FC<P> | ReactNode,
) => FC<P>;

/* 
  Suspense작업을 hoc형태로 도와줍니다.
  에러처리는 필요시 고려하여 확장합니다.

  @example
  withSuspense(suspense를 일으키는 컴포넌트, fallback으로 보여줄 컴포넌트)
*/
export const withSuspense: WithSuspense =
  (Component, Fallback = <Loading width={suspenseFallback.loading} />) =>
  (props) => (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Suspense
        fallback={
          typeof Fallback === 'function' ? <Fallback {...props} /> : Fallback
        }
      >
        <Component {...props} />
      </Suspense>
    </ErrorBoundary>
  );
