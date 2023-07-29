// eslint-disable-next-line react/prop-types
const Tooltip = ({ text, children }) => {
  return (
    <div className='relative inline-block group'>
      {children}
      <div className='bg-complementary bg-opacity-80 w-full min-w-[100px] text-white text-center text-[10px] px-2 rounded absolute bottom-full left-1/2 transform -translate-x-1/2 translate-y-16 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity'>
        {text}
      </div>
    </div>
  );
};

export default Tooltip;
