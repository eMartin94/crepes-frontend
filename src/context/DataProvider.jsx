import { useEffect, useState } from 'react';
import { productData } from '../api/productApi';
import ContextProduct from './ContextProduct';

// eslint-disable-next-line react/prop-types
const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    productData()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ContextProduct.Provider value={{ data, cart, setCart }}>
      {children}
    </ContextProduct.Provider>
  );
};

export default DataProvider;
