import { useEffect, useState } from 'react';
import { productData } from '../api/productApi';
import ContextProduct from './ContextProduct';

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await productData();
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const searchProducts = (searchTerm) => {
    const filteredProducts = Object.values(data).reduce(
      (acc, categoryProducts) => {
        const productsInCategory = Object.values(categoryProducts).filter(
          (product) =>
            product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
        );
        return [...acc, ...productsInCategory];
      },
      []
    );
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
