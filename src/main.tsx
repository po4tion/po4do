import '@/styles/css/reset.css';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { GlobalLayout } from './components/GlobalLayout';
import { router } from './constants/router';
import { queryClient } from './server/provider';

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
