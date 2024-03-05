import { flex } from '@/styles/common';
import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { weight } from '../../../styles/tokens/font.stylex';

const titleStyles = create({
  heading: {
    paddingVertical: '1rem',

    fontWeight: weight.bold,
    fontSize: '2rem',
  },
});

export const Title = ({ children }: PropsWithChildren) => {
  return <h1 {...props(titleStyles.heading, flex.center)}>{children}</h1>;
};
