import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import useScrolled from '../../hooks/useScrolled';
import { menuLinks } from '../../constants/constants';
import { Link, Route, Routes } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import useSmoothScrollTop from '../../hooks/useSmoothScrollTop';
import styles from '../../styles';
import ContextProduct from '../../context/ContextProduct';
import MenuLoading from '../../components/skeleton/MenuLoading';
import ButtonToTop from '../../components/buttons/ButtonToTop';

export const Menu = () => {
  const scrolled = useScrolled();
  const smoothScrollTop = useSmoothScrollTop();
  const [menuActive, setMenuActive] = useState('');
  const [loading, setLoading] = useState(true);

  const { data } = useContext(ContextProduct);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [data]);

  useEffect(() => {
    const handleScroll = () => {
      const contentElements = document.querySelectorAll('[id]');
      let activeElementId = '';

      for (const element of contentElements) {
        const rect = element.getBoundingClientRect();
        const elementTop = rect.top;
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;

        const visiblePercentage =
          (windowHeight - elementTop) / (elementHeight / 100);

        if (visiblePercentage >= 15) {
          activeElementId = element.id;
        } else break;
      }

      setMenuActive(activeElementId);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (e, id) => {
    e.preventDefault();
    setMenuActive(id);
    const ref =
      id === 'crepes'
        ? crepesRef.current
        : id === 'waffles'
        ? wafflesRef.current
        : heladosRef.current;
    ref.scrollIntoView({ behavior: 'smooth' });
  };
  const crepesRef = useRef(null);
  const wafflesRef = useRef(null);
  const heladosRef = useRef(null);

  return (
    <section
      className={`w-full h-full min-h-[80vh] flex flex-col items-center bg-white py-16 font-roboto-condensed`}
    >
      <nav
        className={`fixed w-full h-auto py-2 px-4 ${
          scrolled
            ? 'bg-primary-100 shadow-md backdrop-blur-lg z-10'
            : 'bg-opacity-0'
        }`}
      >
        <ul className='flex flex-wrap justify-center items-center gap-x-8'>
          {menuLinks.map((link) => (
            <li
              key={link.id}
              className={`font-roboto-condensed text-lg ${
                menuActive === link.id
                  ? `${scrolled ? 'text-white' : 'text-primary-100'}`
                  : `${
                      !scrolled
                        ? 'text-complementary hover:text-primary-100'
                        : 'text-complementary hover:text-white'
                    }`
              }  transition-all duration-300 ease-linear`}
              // onClick={(e) => handleClick(e, link.id)}
              onClick={(e) => handleItemClick(e, link.id)}
            >
              <a href={`#${link.id}`}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {loading ? (
        <MenuLoading />
      ) : (
        <>
          {/* <-- sección crepes -->*/}
          <div
            className='w-full max-w-7xl mx-auto pt-[150px] pb-4 px-4 '
            ref={crepesRef}
            id='crepes'
          >
            <h1 className={`${styles.sectionTitle}`}>crepes</h1>
            <div className='flex flex-wrap gap-4 justify-center items-center'>
              {data.crepes?.map((crepe) => (
                <Fragment key={crepe.id}>
                  <Link
                    to={`/menu/crepes/${crepe.id}`}
                    className={`${styles.boxCard}`}
                    onClick={smoothScrollTop}
                  >
                    <img
                      src={crepe.image}
                      alt={crepe.nombre}
                      className='w-auto max-h-[250px]'
                    />
                    <div className='flex flex-col gap-2 justify-center items-center'>
                      <p className='text-center font-roboto-condensed uppercase'>
                        <b>{crepe.nombre}</b>
                      </p>
                      <p className='font-roboto-condensed'>
                        s/ {crepe.precio.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </Fragment>
              ))}
            </div>
            <Routes>
              <Route path=':id' element={<ProductDetails />} />
            </Routes>
          </div>

          {/* <<- sección waffles -->*/}
          <div
            className='w-full max-w-7xl mx-auto pt-[135px] pb-4 mb-8'
            id='waffles'
            ref={wafflesRef}
          >
            <h1 className={`${styles.sectionTitle}`}>waffles</h1>
            <div className='flex flex-wrap gap-4 justify-center items-center'>
              {data.waffles?.map((waffle) => (
                <Fragment key={waffle.id}>
                  <Link
                    to={`/menu/waffles/${waffle.id}`}
                    className={`${styles.boxCard}`}
                    onClick={smoothScrollTop}
                  >
                    <img
                      src={waffle.image}
                      alt={waffle.nombre}
                      className='w-auto max-h-[250px]'
                    />
                    <div className='flex flex-col gap-2 justify-center items-center'>
                      <p className='text-center font-roboto-condensed uppercase'>
                        <b>{waffle.nombre}</b>
                      </p>
                      <p className='font-roboto-condensed'>
                        s/ {waffle.precio.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </Fragment>
              ))}
            </div>
          </div>

          {/* <-- sección helados --> */}
          <div
            className='w-full max-w-7xl mx-auto py-8 pt-[135px] pb-4'
            ref={heladosRef}
            id='helados'
          >
            <h1 className={`${styles.sectionTitle}`}>helados</h1>
            <div className='flex flex-wrap gap-4 justify-center items-center'>
              {data.helados?.map((helado) => (
                <Fragment key={helado.id}>
                  <Link
                    to={`/menu/helados/${helado.id}`}
                    className={`${styles.boxCard}`}
                    onClick={smoothScrollTop}
                  >
                    <img
                      src={helado.image}
                      alt={helado.nombre}
                      className='w-auto max-h-[250px]'
                    />
                    <div className='flex flex-col gap-2 justify-center items-center'>
                      <p className='text-center font-roboto-condensed uppercase'>
                        <b>{helado.nombre}</b>
                      </p>
                      <p className='font-roboto-condensed'>
                        s/ {helado.precio.toFixed(2)}
                      </p>
                    </div>
                  </Link>
                </Fragment>
              ))}
            </div>
          </div>
        </>
      )}

      <ButtonToTop scrolled={scrolled} smoothScrollTop={smoothScrollTop} />
    </section>
  );
};
