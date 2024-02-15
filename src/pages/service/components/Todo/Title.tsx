import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { weight } from '../../../../assets/tokens/font.stylex';

const titleStyles = create({
  title: {
    fontSize: '1.2rem',
    fontWeight: weight.bold,
  },
});

export const Title = ({ children }: PropsWithChildren) => {
  return <h3 {...props(titleStyles.title)}>{children}</h3>;
};
