import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';

const navigationButtonGroupStyles = create({
  container: {
    width: '100%',

    display: 'flex',
    columnGap: '2rem',
  },
  link: {
    background: 'hsl(344deg 90.8% 74.3%)',
  },
});

export const NavigationButtonGroup = ({ children }: PropsWithChildren) => {
  return (
    <div {...props(navigationButtonGroupStyles.container)}>{children}</div>
  );
};
