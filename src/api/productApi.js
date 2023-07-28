import axios from 'axios';

export const productData = () => {
  return axios.get(import.meta.env.VITE_API_CREPES);
};