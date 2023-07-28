import { FaCartPlus } from 'react-icons/fa';

const ButtonCart = ({
  // eslint-disable-next-line react/prop-types
  handlerIncrement,
  // eslint-disable-next-line react/prop-types
  handlerDecrement,
  // eslint-disable-next-line react/prop-types
  price,
  // eslint-disable-next-line react/prop-types
  amount,
  // eslint-disable-next-line react/prop-types
  addToCart,
  // eslint-disable-next-line react/prop-types
  isAnimating,
  // eslint-disable-next-line react/prop-types
  showIcon,
}) => {
  return (
    <div className='flex flex-row justify-start items-center min-w-[270px] h-[44px] border-[1px] rounded-lg border-complementary overflow-hidden'>
      <button
        onClick={addToCart}
        // onClick={handleAddToCart}
        className={`flex justify-evenly items-center w-full bg-complementary h-full px-4 text-lg text-white ${
          showIcon ? 'hover:bg-primary-100 cursor-pointer' : 'cursor-default'
        }`}
      >
        <span className='font-bold'>S/ {price} </span>
        {/* <FaCartPlus
          className={`text-xl animate-ping`}
        /> */}
        <span
          className={`flex justify-center items-center gap-4 ${
            showIcon ? 'block' : 'hidden'
          }`}
        >
          |
          <FaCartPlus
            className={`text-xl ${isAnimating ? 'animate-bounce' : ''} `}
          />
        </span>
      </button>
      <div className='flex items-center h-full'>
        <button
          onClick={handlerDecrement}
          className='bg-primary-100 bg-opacity-0 hover:bg-opacity-100  text-complementary hover:text-white h-full w-[40px] transition-all duration-300 ease-linear'
        >
          -
        </button>
        <span className='flex justify-center items-center text-complementary  border-x-[1px] border-complementary h-full w-[50px]'>
          {amount}
        </span>
        <button
          onClick={handlerIncrement}
          className='bg-primary-100 bg-opacity-0 hover:bg-opacity-100 text-complementary hover:text-white h-full w-[40px] transition-all duration-300 ease-linear'
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ButtonCart;
