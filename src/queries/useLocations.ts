import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { request } from './request';
import { Location } from '../types';

const fetchLocations = (): Promise<AxiosResponse<Location[]>> => {
  return request({
    method: 'GET',
    url: '/locations',
  });
};

// CACHE KEYS
const locationKeys = {
  all: ['locations'] as const,
};

// Hooks

const useLocations = () => {
  return useQuery(locationKeys.all, () => fetchLocations(), {
    select: (response) =>
      response.data.map((location, index) => ({
        ...location,
        timezone: Math.floor((index / response.data.length) * 25) - 12,
      })),
  });
};

export { useLocations };
