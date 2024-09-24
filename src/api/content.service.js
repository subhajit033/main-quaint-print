import api from '.';
import { useQuery, useMutation } from '@tanstack/react-query';

const useGetBanner = (enabled) => {
  return useQuery({
    queryKey: ['banner'],
    queryFn: async () => {
      return api.get('/users/banner');
    },
    enabled,
  });
};
const useGetBestDeals = (enabled) => {
  return useQuery({
    queryKey: ['bestDeals'],
    queryFn: async () => {
      return api.get('/users/best-deal');
    },
    enabled,
  });
};
const useGetBestSeller = (enabled) => {
  return useQuery({
    queryKey: ['bestSeller'],
    queryFn: async () => {
      return api.get('/users/best-seller');
    },
    enabled,
  });
};

export const contentService = {
  useGetBanner,
  useGetBestDeals,
  useGetBestSeller,
};
