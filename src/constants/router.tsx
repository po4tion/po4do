import { ErrorPage } from '@/pages/error/error.page';
import { LoginPage } from '@/pages/login/login.page';
import { ServicePage } from '@/pages/service/service.page';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/service',
    element: <ServicePage />,
  },
  {
    path: '/error',
    element: <ErrorPage />,
  },
]);
