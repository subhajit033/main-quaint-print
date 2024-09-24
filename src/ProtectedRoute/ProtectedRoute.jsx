/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate } from 'react-router-dom';
import api from '@/api';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { setAuthentication, setUserData } from '@/redux/auth.slice';

const ProtectedRoute = ({ children }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
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
  }, []);

  if (isAuthenticated === null) {
    return <h1>Loading...</h1>;
  }

  return isAuthenticated ? children : <Navigate to={'/auth'} />;
};

export default ProtectedRoute;
