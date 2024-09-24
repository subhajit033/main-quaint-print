import api from './index';
import { useQuery, useMutation } from '@tanstack/react-query';

const useUploadArt = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMutation({
    mutationKey: ['uploadArt'],
    mutationFn: async (data) => {
      api.post('/artists/upload-art', data);
    },
  });
};

export const useUploadAsset = () => {
  return useMutation({
    mutationKey: ['uploadAsset'],
    mutationFn: async (body) => {
      return api.post('/uploads/upload-asset', body);
    },
  });
};

export const uploadService = { useUploadArt, useUploadAsset };