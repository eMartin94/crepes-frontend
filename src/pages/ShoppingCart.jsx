import { useContext, useState } from 'react';
import ButtonCart from '../components/buttons/ButtonCart';
import styles from '../styles';
import {
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaSadTear,
  FaTrash,
} from 'react-icons/fa';
import ContextProduct from '../context/ContextProduct';
import { Link } from 'react-router-dom';
import MessageCart from '../components/alerts/MessageCart';

const ShoppingCart = () => {
  const { cart, setCart } = useContext(ContextProduct);
  const [showMessage, setShowMessage] = useState(false);
  const showIcon = false;

  const [tempCart, setTempCart] = useState(cart); // Separate state to hold temporary cart changes

  const handleIncrement = (productId) => {
    setTempCart((prevTempCart) =>
      prevTempCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrement = (productId) => {
    setTempCart((prevTempCart) =>
      prevTempCart.map((item) =>
        item.id === productId && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const handleRemove = (productId) => {
    setTempCart((prevTempCart) =>
      prevTempCart.filter((item) => item.id !== productId)
    );
  };

  const handleConfirmChanges = () => {
    setShowMessage(true);
    setCart(tempCart);
    setTimeout(() => {
      setShowMessage(false);
    }, 1500);
  };

  const handleCancelChanges = () => {
    setTempCart(cart);
  };

  const totalAmount = cart.reduce(
    (total, product) => total + product.quantity * product.precio,
    0
  );

  return (
    <section className={`${styles.sectionWrapper}  relative overflow-hidden`}>
      <div className='w-full flex flex-col justify-center items-center max-w-7xl mx-auto px-2'>
        <h1 className={`${styles.sectionTitle}`}>mi pedido</h1>

        {cart.length === 0 && (
          <div className='flex flex-col justify-center items-center gap-4'>
            <p className='text-center text-gray-400'>
              No hay prodcutos en el carrito
            </p>
            <FaSadTear className='text-center text-gray-400 text-6xl' />
          </div>
        )}

        {tempCart.map((product) => (
          <div key={product.id} className='w-full'>
            <div className='relative w-full h-full grid sm:grid-cols-2 gap-2 grid-cols-1 border-y-[1px] border-gray-200 py-4'>
              <Link
                to={`/menu/${product.categoria}/${product.id}`}
                className='w-full flex flex-row justify-start items-center gap-4'
              >
                <div className='w-[150px] max-w-8 flex justify-center items-center'>
                  <img
                    src={product.image}
                    alt={product.nombre}
                    className='w-auto max-w-24 max-h-24'
                  />
                </div>
                <div className='w-full'>
                  <h4 className='text-lg font-bold'>{product.nombre}</h4>
                  <p className='text-sm'>{product.descripcion}</p>
                </div>
              </Link>

              <div className='flex flex-col justify-center items-start xs:items-end gap-4 pt-4'>
                <ButtonCart
                  amount={product.quantity}
                  price={product.precio.toFixed(2)}
                  showIcon={showIcon}
                  handlerDecrement={() => handleDecrement(product.id)}
                  handlerIncrement={() => handleIncrement(product.id)}
                />
              </div>

              <FaTrash
                className='absolute top-2 right-0 text-gray-400 cursor-pointer'
                onClick={() => handleRemove(product.id)}
              />
              {/* <Link >
                Volver
              </Link> */}
            </div>
          </div>
        ))}
      </div>
      <MessageCart
        showMessage={showMessage}
        message='Se actualizó el carrito de compras'
      />
      {cart.length > 0 && cart !== tempCart && (
        <div className='w-full flex flex-col justify-center items-end gap-4 max-w-7xl mx-auto mt-8 px-2'>
          <button
            onClick={handleConfirmChanges}
            className=' bg-complementary py-2 px-4 rounded-lg text-white hover:bg-primary-100'
          >
            Confirm Changes
          </button>
          <button
            onClick={handleCancelChanges}
            className=' py-2 px-4 rounded-lg text-complementary'
          >
            Cancel Changes
          </button>
        </div>
      )}

      {cart.length > 0 && (
        <div className='w-full flex flex-col justify-center items-end gap-4 max-w-7xl mx-auto mt-8 px-2'>
          <h2 className='text-2xl font-bold'>
            Total s/ {totalAmount.toFixed(2)}
          </h2>
          <button className='w-full sm:w-[200px] bg-complementary py-2 px-4 rounded-lg text-white hover:bg-primary-100'>
            Realizar Pedido
          </button>
          <div className='flex flex-row gap-2 text-start w-full sm:w-[200px]'>
            <FaCcMastercard className='text-complementary text-lg' />
            <FaCcVisa className='text-complementary text-lg' />
            <FaCcPaypal className='text-complementary text-lg' />
          </div>
          <p className='text-gray-400 text-[12px] w-full sm:w-[200px]'>
            Envío gratuito solo en zonas céntricas de Lima
          </p>
        </div>
      )}
    </section>
  );
};

export default ShoppingCart;
