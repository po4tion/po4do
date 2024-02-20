import { flex } from '@/styles/common';
import { create, props } from '@stylexjs/stylex';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { weight } from '../../../../styles/tokens/font.stylex';

const loginButtonStyles = create({
  login: {
    width: '100%',
    aspectRatio: 8 / 1,

    columnGap: '0.5rem',

    borderWidth: 0,
    borderRadius: '0.3rem',

    background: 'hsl(0deg 0% 0%)',

    color: 'hsl(0deg 0% 100%)',
    fontSize: '1rem',
    fontWeight: weight.regular,

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
    <button
      {...props(loginButtonStyles.login, flex.center)}
      type="button"
      {...rest}
    >
      {children}
    </button>
  );
};
