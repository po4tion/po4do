import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage } from '../pages/error/error.page';
import { LoginPage } from '../pages/login/login.page';
import { ServicePage } from '../pages/service/service.page';

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
