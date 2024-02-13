import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';

const titleStyles = create({
  title: {
    fontSize: '1.2rem',
    fontWeight: 700,
  },
});

export const Title = ({ children }: PropsWithChildren) => {
  return <h3 {...props(titleStyles.title)}>{children}</h3>;
};
