import { createClient } from '@supabase/supabase-js';
import { QueryClient } from '@tanstack/react-query';

export const supabase = createClient<Database.Provider>(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_KEY,
);

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 60000,
      placeholderData: true,
    },
  },
});
