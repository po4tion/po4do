import { flex } from '@/styles/common';
import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';

const contentStyles = create({
  content: {
    width: '20rem',

    flexDirection: 'column',
    rowGap: '1rem',
  },
});

export const Content = ({ children }: PropsWithChildren) => {
  return <div {...props(contentStyles.content, flex.center)}>{children}</div>;
};
