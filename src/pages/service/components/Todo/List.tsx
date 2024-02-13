import { create, props } from '@stylexjs/stylex';
import type { Database } from '../../../../server/database.types';

const listStyles = create({
  list: {
    overflowY: 'scroll',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },

  listitem: {
    padding: '1rem 1.5rem',

    marginBottom: '0.3rem',

    border: '1px solid hsl(0deg 0% 80%)',
    borderRadius: '0.2rem',

    ':first-of-type': {
      borderTopRightRadius: '0.5rem',
      borderTopLeftRadius: '0.5rem',
    },

    ':last-of-type': {
      marginBottom: 0,

      borderBottomRightRadius: '0.5rem',
      borderBottomLeftRadius: '0.5rem',
    },
  },
});

type Props = {
  data: Array<Database['public']['Tables']['todos']['Row']>;
};

export const List = ({ data }: Props) => {
  return (
    <ul {...props(listStyles.list)}>
      {data.map(({ id, description }) => (
        <li key={id} {...props(listStyles.listitem)}>
          {description}
        </li>
      ))}
    </ul>
  );
};
