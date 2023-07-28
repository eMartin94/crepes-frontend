const MenuLoading = () => {
  return (
    <div className='w-full max-w-7xl mx-auto pt-[150px] pb-4 px-4 '>
      <h1 className='w-80 h-12 bg-gray-200 rounded-md mx-auto mb-8'></h1>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
        <div>
          <div className='flex flex-col justify-around gap-4 items-center w-[280px] h-[350px] p-4'>
            <div className='w-60 h-[250px] bg-gray-200 rounded-md'></div>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <p className='bg-gray-200 w-[100px] h-[30px] rounded-md text-center font-roboto-condensed uppercase'>
                <b></b>
              </p>
              <p className='bg-gray-200 w-16 h-[30px] rounded-md text-center font-roboto-condensed uppercase'></p>
            </div>
          </div>
        </div>
        <div className='hidden sm:block'>
          <div className='flex flex-col justify-around gap-4 items-center w-[280px] h-[350px] p-4'>
            <div className='w-60 h-[250px] bg-gray-200 rounded-md'></div>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <p className='bg-gray-200 w-[100px] h-[30px] rounded-md text-center font-roboto-condensed uppercase'>
                <b></b>
              </p>
              <p className='bg-gray-200 w-16 h-[30px] rounded-md text-center font-roboto-condensed uppercase'></p>
            </div>
          </div>
        </div>
        <div className='hidden md:block'>
          <div className='flex flex-col justify-around gap-4 items-center w-[280px] h-[350px] p-4'>
            <div className='w-60 h-[250px] bg-gray-200 rounded-md'></div>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <p className='bg-gray-200 w-[100px] h-[30px] rounded-md text-center font-roboto-condensed uppercase'>
                <b></b>
              </p>
              <p className='bg-gray-200 w-16 h-[30px] rounded-md text-center font-roboto-condensed uppercase'></p>
            </div>
          </div>
        </div>
        <div className='hidden lg:block'>
          <div className='flex flex-col justify-around gap-4 items-center w-[280px] h-[350px] p-4'>
            <div className='w-60 h-[250px] bg-gray-200 rounded-md'></div>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <p className='bg-gray-200 w-[100px] h-[30px] rounded-md text-center font-roboto-condensed uppercase'>
                <b></b>
              </p>
              <p className='bg-gray-200 w-16 h-[30px] rounded-md text-center font-roboto-condensed uppercase'></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuLoading;
