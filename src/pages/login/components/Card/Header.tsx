import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';

const cardHeaderStyles = create({
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    rowGap: '1rem',
  },
  logo: {
    width: '4rem',
    aspectRatio: 1 / 1,

    borderRadius: '0.5rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 700,
  },
});

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <header {...props(cardHeaderStyles.header)}>
      <img
        {...props(cardHeaderStyles.logo)}
        src="/logo192.png"
        alt="po4do's logo"
      />

      <h2 {...props(cardHeaderStyles.title)}>{children}</h2>
    </header>
  );
};
