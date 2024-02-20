import { flex } from '@/styles/common';
import { create, props } from '@stylexjs/stylex';
import { forwardRef, type PropsWithChildren } from 'react';

const globalLayoutStyles = create({
  main: {
    minHeight: '100vh',

    background: 'hsl(220deg 14.3% 95.9%)',
  },
});

export const GlobalLayout = forwardRef<HTMLDivElement, PropsWithChildren>(
  ({ children }, ref) => {
    return (
      <div ref={ref} {...props(globalLayoutStyles.main, flex.center)}>
        {children}
      </div>
    );
  },
);
