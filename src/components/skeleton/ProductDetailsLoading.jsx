const ProductDetailsLoading = () => {
  return (
    <div className='w-full h-full min-h-[80vh]  py-16 px-4 bg-h'>
      <div className='w-full h-full max-w-7xl m-auto'>
        <div className='flex items-center gap-2 '>
          <div className='h-6 w-6 bg-gray-200 rounded-full animate-pulse'></div>
          <div className='h-6 w-16 bg-gray-200 rounded-full animate-pulse'></div>
        </div>
        <div className='flex flex-col md:flex-row gap-4 justify-center md:justify-evenly items-center'>
          <div className='h-64 w-64 md:max-w-[450px] bg-gray-200 rounded-lg animate-pulse'></div>
          <div className='flex flex-col gap-4'>
            <div className='h-8 w-32 bg-gray-200 rounded-full animate-pulse'></div>
            <div className='h-6 w-48 bg-gray-200 rounded-full animate-pulse'></div>
            <div className='flex items-center gap-1'>
              <div className='h-5 w-5 bg-gray-200 rounded-full animate-pulse'></div>
              <div className='h-5 w-5 bg-gray-200 rounded-full animate-pulse'></div>
              <div className='h-5 w-5 bg-gray-200 rounded-full animate-pulse'></div>
              <div className='h-5 w-5 bg-gray-200 rounded-full animate-pulse'></div>
              <div className='h-5 w-5 bg-gray-200 rounded-full animate-pulse'></div>
            </div>
            <div className='h-6 w-32 bg-gray-200 rounded-full animate-pulse'></div>
            <ul className='list-disc list-inside '>
              <li className='h-4 w-24 bg-gray-200 rounded-full list-none animate-pulse'></li>
              <li className='h-4 w-32 bg-gray-200 rounded-full list-none animate-pulse'></li>
              <li className='h-4 w-16 bg-gray-200 rounded-full list-none animate-pulse'></li>
            </ul>
            <div className='flex flex-row justify-start items-center h-[52px]'>
              <div className='h-10 w-24 bg-gray-200 border-[1px] border-gray-200rounded-l-md animate-pulse'></div>
              <div className='flex items-center h-full'>
                <div className='h-10 w-10 bg-gray-200 border-y-[1px] border-gray-200 animate-pulse'></div>
                <div className='h-10 w-12 flex border-[1px] border-gray-200 animate-pulse'></div>
                <div className='h-10 w-10 bg-gray-200 border-y-[1px] border-r-[1px] border-gray-200  rounded-r-md animate-pulse'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsLoading;
