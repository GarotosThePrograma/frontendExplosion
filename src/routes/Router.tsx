import { createBrowserRouter } from 'react-router-dom';
import Login from '../pages/Login/Index';
import Home from '../pages/Home/Home';
import ProductRegister from '../pages/admin/ProductRegister/Index';
import Register from '../pages/Register/Index';
import Layout from '../pages/Layout';
import Favorits from '../pages/user/Favorits/Index';
import ShopCart from '../pages/user/ShopCart/Index';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/favorits',
        element: <Favorits />,
      },
      {
        path: '/shopcart',
        element: <ShopCart />,
      },
      {
        path: '/productregister',
        element: <ProductRegister />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />
  },
]);
