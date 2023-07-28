// eslint-disable-next-line react/prop-types
const Button = ({ type, text }) => {
  return (
    <button
      type={type}
      className='text-white font-roboto-condensed text-base border-[1px] border-white w-full max-w-[150px] rounded-lg py-1  hover:bg-primary-100 transition-all duration-300 ease-linear'
    >
      {text}
    </button>
  );
};

export default Button;
