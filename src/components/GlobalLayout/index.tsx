import { flex } from '@/styles/common/flex';
import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';

const globalLayoutStyles = create({
  main: {
    minHeight: '100vh',

    background: 'hsl(220deg 14.3% 95.9%)',
  },
});

export const GlobalLayout = ({ children }: PropsWithChildren) => {
  return <div {...props(globalLayoutStyles.main, flex.center)}>{children}</div>;
};
