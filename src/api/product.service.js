import { useQuery, useMutation } from '@tanstack/react-query';
import api from './index';

const useGetAllPdt = (enabled) => {
  return useQuery({
    queryKey: ['allPdt'],
    queryFn: async () => {
      return api.get('/users/get-all-products');
    },
    enabled: enabled,
  });
};

const useGetAllCartItem = (enabled) => {
  return useQuery({
    queryKey: ['cartItem'],
    queryFn: async () => {
      return api.get('/users/get-cart-item');
    },
    enabled,
  });
};

export const productService = {
  useGetAllPdt,
  useGetAllCartItem,
};
