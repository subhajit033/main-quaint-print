import Header from '@/shared/header/header';
import Footer from '@/shared/footer/footer';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthentication, setUserData } from '@/redux/auth.slice';
import { setCartItem } from '@/redux/cart.slice';
import api from '@/api';
import { useEffect, useState } from 'react';
import { ApiService } from '@/api/api.service';

const Layout = () => {
  const dispatch = useDispatch();
  const [isMounted, setIsMounted] = useState(false);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const cartItem = useSelector((store) => store.cart.cartItem);
  const { isError, isPending, data, isSuccess } =
    ApiService.productService.useGetAllCartItem(isMounted);

  const checkLoggedIn = async () => {
    try {
      const res = await api.get('/users/is-user-loggedin');
      console.log(res);
      if (res.data.status === 'success') {
        dispatch(setAuthentication(true));

        dispatch(setUserData(res.data.data.user));
      } else {
        throw new Error('failed');
      }
    } catch (err) {
      console.log(err);
      dispatch(setUserData(null));

      dispatch(setAuthentication(false));
    }
  };

  useEffect(() => {
    !isAuthenticated && checkLoggedIn();
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (isSuccess) {
      setIsMounted(false);
      if (!(cartItem.length > 0)) {
        const cart = data.data.data.data;
        if (cart.length > 0) {
          for (let i = 0; i < cart.length; i++) {
            dispatch(setCartItem({ ...cart[i] }));
          }
        }
      }
    }
  }, [isSuccess]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Toaster />
    </>
  );
};

export default Layout;
