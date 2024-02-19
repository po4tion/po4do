import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { weight } from '../../../../styles/tokens/font.stylex';

const footerStyles = create({
  footer: {
    color: 'hsl(220deg 8.9% 46.1%)',
    fontSize: '0.9rem',
    fontWeight: weight.regular,
    textAlign: 'center',
    lineHeight: '1rem',
    wordBreak: 'break-all',
  },
});

export const Footer = ({ children }: PropsWithChildren) => {
  return <footer {...props(footerStyles.footer)}>{children}</footer>;
};
