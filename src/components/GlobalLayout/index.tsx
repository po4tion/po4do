import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';

const globalLayoutStyles = create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    minHeight: '100vh',

    background: 'hsl(220deg 14.3% 95.9%)',
  },
});

export const GlobalLayout = ({ children }: PropsWithChildren) => {
  return <div {...props(globalLayoutStyles.main)}>{children}</div>;
};
