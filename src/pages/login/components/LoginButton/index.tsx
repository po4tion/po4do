import { create, props } from '@stylexjs/stylex';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const loginButtonStyles = create({
  login: {
    width: '100%',
    aspectRatio: 8 / 1,

    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    columnGap: '0.5rem',

    borderWidth: 0,
    borderRadius: '0.3rem',

    background: 'hsl(0deg 0% 0%)',

    color: 'hsl(0deg 0% 100%)',
    fontSize: '1rem',
    fontWeight: 500,

    cursor: 'pointer',
    scale: {
      default: 1,
      ':active': 0.98,
    },
  },
});

export const LoginButton = ({
  children,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button {...props(loginButtonStyles.login)} type="button" {...rest}>
      {children}
    </button>
  );
};
