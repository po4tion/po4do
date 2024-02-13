import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';

const containerStyles = create({
  main: {
    width: '25rem',

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '2rem',
  },
});

export const Container = ({ children }: PropsWithChildren) => {
  return <main {...props(containerStyles.main)}>{children}</main>;
};
