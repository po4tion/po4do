import { flex } from '@/styles/common';
import { create, props, type StyleXStyles } from '@stylexjs/stylex';
import {
  forwardRef,
  type ButtonHTMLAttributes,
  type PropsWithChildren,
} from 'react';
import { Link as L, type LinkProps } from 'react-router-dom';
import { weight } from '../../styles/tokens/font.stylex';

const buttonStyles = create({
  main: {
    width: '100%',
    aspectRatio: 8 / 1,

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
  link: {
    textDecoration: 'none',
  },
});

type Props = {
  style?: StyleXStyles;
};

const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<
    Props & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style'>
  >
>(({ children, style, type = 'submit', ...rest }, ref) => {
  return (
    <button
      ref={ref}
      type={type}
      {...props(buttonStyles.main, flex.center, style)}
      {...rest}
    >
      {children}
    </button>
  );
});

const Link = ({
  children,
  style,
  ...rest
}: PropsWithChildren<Omit<LinkProps, 'style'> & Props>) => {
  return (
    <L
      {...props(buttonStyles.main, buttonStyles.link, flex.center, style)}
      {...rest}
    >
      {children}
    </L>
  );
};

export { Button, Link };
