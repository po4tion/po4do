import { flex } from '@/styles/common';
import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { weight } from '../../../styles/tokens/font.stylex';

const subtitleStyles = create({
  heading: {
    fontWeight: weight.bold,
    fontSize: '1rem',
  },
});

export const Subtitle = ({ children }: PropsWithChildren) => {
  return <h2 {...props(subtitleStyles.heading, flex.center)}>{children}</h2>;
};
