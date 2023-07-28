import { FaArrowAltCircleUp } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const ButtonToTop = ({ scrolled, smoothScrollTop }) => {
  return (
    <div className='py-8 fixed bottom-4 right-4 px-4'>
      <FaArrowAltCircleUp
        className={`${
          !scrolled
            ? 'opacity-0'
            : 'opacity-100 ml-auto text-4xl text-complementary hover:text-black drop-shadow-lg transition-all duration-300 ease-linear'
        } cursor-pointer`}
        onClick={smoothScrollTop}
      />
    </div>
  );
};

export default ButtonToTop;
