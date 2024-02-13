import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';

const titleStyles = create({
  title: {
    fontSize: '2rem',
    fontWeight: 700,
    letterSpacing: '0.3rem',
  },
});

export const Title = ({ children }: PropsWithChildren) => {
  return <h2 {...props(titleStyles.title)}>{children}</h2>;
};
