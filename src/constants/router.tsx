import { GlobalLayout } from '@/components/GlobalLayout';
import { ErrorPage } from '@/pages/error/error.page';
import { LoginPage } from '@/pages/login/login.page';
import { ServicePage } from '@/pages/service/service.page';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    element: <GlobalLayout />,
    children: [
      {
        path: '/',
        element: <LoginPage />,
      },
      {
        path: '/service',
        element: <ServicePage />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);
