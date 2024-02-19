declare namespace Database {
  type Status = 'pending' | 'progress' | 'done';

  type Provider = {
    public: {
      Tables: {
        todos: {
          Row: {
            created_at: string;
            description: string | null;
            id: number;
            status: Status;
            updated_at: string;
            userId: string;
          };
          Insert: {
            created_at?: string;
            description?: string | null;
            id?: number;
            status?: Status;
            updated_at?: string;
            userId: string;
          };
          Update: {
            created_at?: string;
            description?: string | null;
            id?: number;
            status?: Status;
            updated_at?: string;
            userId?: string;
          };
          Relationships: [
            {
              foreignKeyName: 'todos_userId_fkey';
              columns: ['userId'];
              isOneToOne: false;
              referencedRelation: 'users';
              referencedColumns: ['id'];
            },
          ];
        };
      };
      Views: {
        [_ in never]: never;
      };
      Functions: {
        [_ in never]: never;
      };
      Enums: {
        [_ in never]: never;
      };
      CompositeTypes: {
        [_ in never]: never;
      };
    };
  };

  type Tables<
    PublicTableNameOrOptions extends
      | keyof (Provider['public']['Tables'] & Provider['public']['Views'])
      | { schema: keyof Provider },
    TableName extends PublicTableNameOrOptions extends {
      schema: keyof Provider;
    }
      ? keyof (Provider[PublicTableNameOrOptions['schema']]['Tables'] &
          Provider[PublicTableNameOrOptions['schema']]['Views'])
      : never = never,
  > = PublicTableNameOrOptions extends { schema: keyof Provider }
    ? (Provider[PublicTableNameOrOptions['schema']]['Tables'] &
        Provider[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
        Row: infer R;
      }
      ? R
      : never
    : PublicTableNameOrOptions extends keyof (Provider['public']['Tables'] &
          Provider['public']['Views'])
      ? (Provider['public']['Tables'] &
          Provider['public']['Views'])[PublicTableNameOrOptions] extends {
          Row: infer R;
        }
        ? R
        : never
      : never;

  type TablesInsert<
    PublicTableNameOrOptions extends
      | keyof Provider['public']['Tables']
      | { schema: keyof Provider },
    TableName extends PublicTableNameOrOptions extends {
      schema: keyof Provider;
    }
      ? keyof Provider[PublicTableNameOrOptions['schema']]['Tables']
      : never = never,
  > = PublicTableNameOrOptions extends { schema: keyof Provider }
    ? Provider[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
        Insert: infer I;
      }
      ? I
      : never
    : PublicTableNameOrOptions extends keyof Provider['public']['Tables']
      ? Provider['public']['Tables'][PublicTableNameOrOptions] extends {
          Insert: infer I;
        }
        ? I
        : never
      : never;

  type TablesUpdate<
    PublicTableNameOrOptions extends
      | keyof Provider['public']['Tables']
      | { schema: keyof Provider },
    TableName extends PublicTableNameOrOptions extends {
      schema: keyof Provider;
    }
      ? keyof Provider[PublicTableNameOrOptions['schema']]['Tables']
      : never = never,
  > = PublicTableNameOrOptions extends { schema: keyof Provider }
    ? Provider[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
        Update: infer U;
      }
      ? U
      : never
    : PublicTableNameOrOptions extends keyof Provider['public']['Tables']
      ? Provider['public']['Tables'][PublicTableNameOrOptions] extends {
          Update: infer U;
        }
        ? U
        : never
      : never;
}
