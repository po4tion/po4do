import type { Database } from '@/server/database.types';
import { create, props } from '@stylexjs/stylex';

const listStyles = create({
  list: {
    overflowY: 'scroll',
    '::-webkit-scrollbar': {
      display: 'none',
    },
  },

  listitem: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',

    padding: '1rem 1.5rem',

    marginBottom: '0.3rem',

    border: '1px solid hsl(0deg 0% 80%)',
    borderRadius: '0.2rem',

    fontSize: '1rem',

    cursor: 'pointer',

    ':hover': {
      background: 'hsl(0deg 0% 90%)',
    },

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

  done: {
    textDecoration: 'line-through',
    textDecorationColor: 'hsl(0deg 100% 70%)',
    color: 'hsl(0deg 0% 60%)',
  },
});

type Props = {
  data: Array<Database['public']['Tables']['todos']['Row']>;
  update: (
    id: Database['public']['Tables']['todos']['Update']['id'],
    status: Database['public']['Tables']['todos']['Update']['status'],
  ) => void;
  remove: (id: Database['public']['Tables']['todos']['Update']['id']) => void;
};

export const List = ({ data, update, remove }: Props) => {
  return (
    <ul {...props(listStyles.list)}>
      {data.map(({ id, description, status }) => {
        const styles = [
          listStyles.listitem,
          status === 'done' ? listStyles.done : {},
        ];

        return (
          <li
            key={id}
            onClick={() => {
              update(id, status);
            }}
            onDoubleClick={() => {
              remove(id);
            }}
            {...props(...styles)}
          >
            {description}
          </li>
        );
      })}
    </ul>
  );
};
