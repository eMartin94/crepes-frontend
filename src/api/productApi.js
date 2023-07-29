import axios from 'axios';
const API_URL = import.meta.env.VITE_API_CREPES_LOCAL;

const productApi = axios.create({
  baseURL: API_URL,
})

export const listarProductos = async () => {
  const { data } = await productApi.get('/producto');
  return data;
}