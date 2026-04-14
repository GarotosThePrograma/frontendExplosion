import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import ProductRegister from '../pages/admin/ProductRegister';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/productregister',
    element: <ProductRegister />,
  }
]);
