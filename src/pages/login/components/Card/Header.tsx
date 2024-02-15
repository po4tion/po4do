import { create, props } from '@stylexjs/stylex';
import type { PropsWithChildren } from 'react';
import { weight } from '../../../../assets/tokens/font.stylex';

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
    fontWeight: weight.bold,
  },
});

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <div {...props(cardHeaderStyles.header)}>
      <img
        {...props(cardHeaderStyles.logo)}
        src="/logo192.png"
        alt="po4do's logo"
      />

      <h2 {...props(cardHeaderStyles.title)}>{children}</h2>
    </div>
  );
};
