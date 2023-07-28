import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <section
        className='flex flex-col justify-around items-center gap-8 p-4 w-full h-full min-h-[300px] bg-primary-100 font-roboto-condensed'
        id='contacto'
      >
        <div className='flex flex-col md:flex-row justify-around md:items-start gap-8 w-full h-full max-w-7xl'>
          <div className='flex flex-col justify-center gap-2 items-center'>
            <b className='text-complementary text-sm uppercase'>dirección</b>
            <p className='text-complementary text-sm text-center capitalize'>
              calle falsa 123, san juan de lurigancho, lima - perú
            </p>
          </div>
          <div className='flex flex-col justify-center gap-2 items-center'>
            <b className='text-complementary text-sm uppercase'>teléfono</b>
            <p className='text-complementary text-sm text-center capitalize'>
              800-123-4567
            </p>
            <p className='text-complementary text-sm text-center capitalize'>
              912 345 678
            </p>
          </div>
          <div className='flex flex-col justify-center gap-2 items-center'>
            <b className='text-complementary text-sm uppercase'>e-mail</b>
            <p className='text-complementary text-sm text-center capitalize'>
              ejemplo@ejemplo.com
            </p>
            <div className='flex flex-row justify-center gap-4'>
              <FaInstagram className='text-complementary text-xl hover:text-white cursor-pointer transition-all duration-300 ease-linear' />
              <FaFacebook className='text-complementary text-xl hover:text-white cursor-pointer transition-all duration-300 ease-linear' />
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center gap-4 w-full h-full max-w-7xl'>
          <p className='text-complementary text-sm text-center'>
            © 2023 | ALL RIGHTS RESERVED
          </p>
        </div>
      </section>
    </>
  );
};

export default Footer;
