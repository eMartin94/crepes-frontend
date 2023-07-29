import { useEffect, useState } from 'react';
import { listarProductos } from '../api/productApi';
import ContextProduct from './ContextProduct';

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resData = await listarProductos();
        setData(resData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const searchProducts = (searchTerm) => {
    const filteredProducts = data.filter((product) => {
      const { nombre, categoria } = product;
      const lowerSearchTerm = searchTerm.toLowerCase();
      return (
        nombre.toLowerCase().includes(lowerSearchTerm) ||
        categoria.toLowerCase().includes(lowerSearchTerm)
        // subcategoria.toLowerCase().includes(lowerSearchTerm)
      );
    });
    setSearchResults(filteredProducts);
  };

  return (
    <ContextProduct.Provider
      value={{ data, cart, setCart, searchProducts, searchResults }}
    >
      {children}
    </ContextProduct.Provider>
  );
};

export default DataProvider;
