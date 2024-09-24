import { useMutation } from '@tanstack/react-query';
import api from '.';

const useUpdateCart = (cartId) => {
  return useMutation({
    mutationKey: ['updateCart'],
    mutationFn: async (body) => {
      return api.patch(`/users/cart/${cartId}`, body);
    },
  });
};

const useDeleteCartItem = () => {
  return useMutation({
    mutationKey: ['deleteCart'],
    mutationFn: async (cartId) => {
      return api.delete(`/users/cart/${cartId}`);
    },
  });
};

export const cartService = { useUpdateCart, useDeleteCartItem };
