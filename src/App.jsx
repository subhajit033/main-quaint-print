import Layout from './layout/layout';
import Home from './pages/home/home';
import PersonalizePrint from './pages/personalize-print/PersonalizePrint';
import OthersPrints from './pages/others-prints/others-prints';
import DashboardLayout from './layout/DashboardLayout';
import EditDetails from './pages/dashboard/edit-details/EditDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ArtWorkPrint from './pages/artworks-print/ArtWorkPrint';
import Login from './pages/login/Login';
import SignUp from './pages/signup/SignUp';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import PaymentSuccess from './pages/success/PaymentSuccess';
import Auth from './pages/auth/Auth';

const App = () => {
  return <RouterProvider router={appRouter} />;
};

const appRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/personalize-print',
        element: <PersonalizePrint />,
      },
      {
        path: '/artwork-print',
        element: <ArtWorkPrint />,
      },
      {
        path: '/other-print',
        element: <OthersPrints />,
      },
      {
        path: '/product-details',
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '',
        element: <EditDetails />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/payment/success',
    element: <PaymentSuccess />,
  },
]);


// change

export default App;
