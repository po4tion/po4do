import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './assets/reset.css';
import { GlobalLayout } from './components/GlobalLayout';
import { router } from './constants/router';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 60000,
      placeholderData: true,
    },
  },
});

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalLayout>
        <RouterProvider router={router} />
      </GlobalLayout>
    </QueryClientProvider>
  </React.StrictMode>,
);
