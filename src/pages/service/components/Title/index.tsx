import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { weight } from '../../../../styles/tokens/font.stylex';

const titleStyles = create({
  title: {
    fontSize: '2rem',
    fontWeight: weight.bold,
    letterSpacing: '0.3rem',
  },
});

export const Title = ({ children }: PropsWithChildren) => {
  return <h2 {...props(titleStyles.title)}>{children}</h2>;
};
