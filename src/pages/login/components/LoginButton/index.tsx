import { Button } from '@/components/Button';
import { create } from '@stylexjs/stylex';
import type { ComponentProps } from 'react';

const loginButtonStyles = create({
  login: {
    columnGap: '0.5rem',
  },
});

export const LoginButton = ({
  children,
  ...rest
}: ComponentProps<typeof Button>) => {
  return (
    <Button type="button" style={loginButtonStyles.login} {...rest}>
      {children}
    </Button>
  );
};
