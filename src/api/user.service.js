import { useQuery, useMutation } from '@tanstack/react-query';
import api from './index';

const useLogin = () => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: async (data) => {
      return api.post('/users/login', data);
    },
  });
};
const useRegister = () => {
  return useMutation({
    mutationKey: ['register'],
    mutationFn: async (data) => {
      return api.post('/users/signup', data);
    },
  });
};

const useUpdateUserDetails = () => {
  return useMutation({
    mutationKey: ['updateData'],
    mutationFn: async (data) => {
      return api.patch('/users/edit-details', data);
    },
  });
};

const useCheckLogin = () => {
  return useQuery({
    queryKey: ['checklogin'],
    queryFn: async () => {
      return api.get('/users/is-user-loggedin');
    },
  });
};

const useGetArts = () => {
  return useQuery({
    queryKey: ['getArts'],
    queryFn: async () => {
      return api.get('/users/my-arts');
    },
  });
};

const useGoogleLogin = () => {
  return useMutation({
    mutationKey: ['google'],
    mutationFn: async (body) => {
      return api.post('/users/google', body);
    },
  });
};

export const userService = {
  useLogin,
  useRegister,
  useUpdateUserDetails,
  useCheckLogin,
  useGetArts,
  useGoogleLogin
};
