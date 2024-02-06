import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';

const containerStyles = create({
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    minHeight: '100vh',

    background: 'hsl(220deg 14.3% 95.9%)',
  },
});

export const Container = ({ children }: PropsWithChildren) => {
  return <main {...props(containerStyles.main)}>{children}</main>;
};
