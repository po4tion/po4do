import { props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { containerStyles } from './Container.styles';

export const Container = ({ children }: PropsWithChildren) => {
  return <main {...props(containerStyles.main)}>{children}</main>;
};
