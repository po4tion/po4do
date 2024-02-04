import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import './index.css';
import { LoginPage } from './pages/login/login.page.tsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<LoginPage />}>
      <Route path="dashboard" element={<div>dashboard</div>} />
    </Route>,
  ),
);

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
