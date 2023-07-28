import { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaChevronLeft, FaStar, FaStarHalf } from 'react-icons/fa';

import ContextProduct from '../../context/ContextProduct';
import ProductDetailsLoading from '../../components/skeleton/ProductDetailsLoading';
import ButtonCart from '../../components/buttons/ButtonCart';
import styles from '../../styles';
import MessageCart from '../../components/alerts/MessageCart';

const ProductDetails = () => {
  const { category, id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const showIcon = true;

  const { data, cart, setCart } = useContext(ContextProduct);

  useEffect(() => {
    const delay = setTimeout(() => {
      if (data && data[category]) {
        const productFound = data[category].find(
          (product) => product.id === parseInt(id)
        );
        setProduct(productFound);
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(delay);
  }, [data, category, id]);

  const handleIncrement = () => setAmount(amount + 1);

  const handleDecrement = () => amount > 1 && setAmount(amount - 1);

  const addToCart = (product, quantity) => {
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += quantity;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const handleAddToCart = () => {
    setIsAnimating(true);
    setShowMessage(true);
    addToCart(product, amount);
    setTimeout(() => {
      setIsAnimating(false);
      setShowMessage(false);
    }, 1500);
  };

  if (loading) return <ProductDetailsLoading />;

  return (
    <section className={`${styles.sectionWrapper} relative overflow-hidden`}>
      <div className='w-full h-full max-w-7xl m-auto'>
        <Link
          to={`/menu`}
          className='flex items-center gap-2 text-complementary'
        >
          <FaChevronLeft /> Volver al menú
        </Link>
        <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-evenly items-center'>
          <img
            src={product.image}
            alt={product.nombre}
            className='w-auto md:max-w-[450px] max-h-[450px]'
          />
          <div className='flex flex-col gap-4 relative overflow-hidden'>
            <h1 className='text-4xl font-bold uppercase text-complementary'>
              {product.nombre}
            </h1>
            <p className='text-complementary'>{product.descripcion}</p>
            <div className='flex items-center gap-1'>
              <FaStar className='text-complementary' />
              <FaStar className='text-complementary' />
              <FaStar className='text-complementary' />
              <FaStar className='text-complementary' />
              <FaStarHalf className='text-complementary' />
            </div>
            <h2 className='text-complementary'>Ingredientes:</h2>
            <ul className='list-disc list-inside text-complementary'>
              {product.ingredientes.map((ingrediente) => (
                <li key={ingrediente}>{ingrediente}</li>
              ))}
            </ul>

            <ButtonCart
              price={product.precio.toFixed(2)}
              amount={amount}
              showIcon={showIcon}
              isAnimating={isAnimating}
              handlerIncrement={handleIncrement}
              handlerDecrement={handleDecrement}
              addToCart={handleAddToCart}
            />
            <br />
          </div>
        </div>
      </div>
      <MessageCart
        showMessage={showMessage}
        message='Se agregó al carrito de compras'
      />
    </section>
  );
};

export default ProductDetails;
