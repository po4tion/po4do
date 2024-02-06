import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

const cardStyles = create({
  article: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '2rem',

    padding: '1.5rem',

    borderRadius: '0.5rem',

    background: 'hsl(0deg 0% 100%)',
    boxShadow: '0px 2px 14px 0px hsl(0deg 0% 0% / 0.1)',
  },
});

const Card = ({ children }: PropsWithChildren) => {
  return <article {...props(cardStyles.article)}>{children}</article>;
};

Card.Content = Content;
Card.Header = Header;
Card.Footer = Footer;

export { Card };
