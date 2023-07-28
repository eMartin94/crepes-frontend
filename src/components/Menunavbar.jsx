const Menunavbar = () => {
  return (
    <>
      <nav
      // className={`${
      //   isTop ? 'bottom-0' : 'top-14'
      // } fixed w-full h-16 bg-gray-100 flex items-center justify-around text-lg transition-all duration-300 ease-in-out`}
      >
        <ul className='flex justify-center items-center gap-4'>
          <li className='text-white font-roboto-condensed text-lg'>item1</li>
          <li className='text-white font-roboto-condensed text-lg'>item1</li>
          <li className='text-white font-roboto-condensed text-lg'>item1</li>
          <li className='text-white font-roboto-condensed text-lg'>item1</li>
          <li className='text-white font-roboto-condensed text-lg'>item1</li>
        </ul>
      </nav>
    </>
  );
};

export default Menunavbar;
