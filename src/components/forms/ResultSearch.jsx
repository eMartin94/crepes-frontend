import { useContext } from 'react';
import ContextProduct from '../../context/ContextProduct';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import styles from '../../styles';
import ProductDetails from '../../pages/MenuPages/ProductDetails';
import useSmoothScrollTop from '../../hooks/useSmoothScrollTop';

const ResultSearch = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get('search');
  const { searchResults } = useContext(ContextProduct);
  const smoothScrollTop = useSmoothScrollTop();

  return (
    <section className={styles.sectionWrapper}>
      <div className='flex w-full min-h-[50vh] flex-col justify-evenly items-center max-w-7xl mx-auto'>
        <h2 className='text-2xl text-center text-complementary mt-8'>
          Resultados de la búsqueda para: <b>{searchTerm}</b>
        </h2>
        {searchResults.length > 0 ? (
          <div className='w-full max-w-7xl mx-auto pt-16 pb-4 px-4 '>
            <div className='flex flex-wrap gap-4 justify-center items-center text-complementary'>
              {searchResults.map((product) => (
                <Link
                  key={product.id}
                  to={`/menu/${product.categoria}/${product.id}`}
                  className={`flex flex-col justify-between gap-4 items-center w-[200px] max-h-[280px] p-4 text-complementary hover:bg-primary-100 hover:bg-opacity-25 hover:shadow-md hover:text-complementary rounded-lg cursor-pointer transition-all duration-300 ease-linear`}
                  onClick={smoothScrollTop}
                >
                  <img
                    src={product.image}
                    alt={product.nombre}
                    className='w-auto h-full max-h-[180px]'
                  />
                  <div className='flex flex-col gap-2 justify-center items-center'>
                    <p className='text-center font-roboto-condensed uppercase'>
                      <b>{product.nombre}</b>
                    </p>
                    {/* <p>{product.categoria}</p> */}
                    <p>Precio: ${product.precio.toFixed(2)}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Routes>
              <Route path=':id' element={<ProductDetails />} />
            </Routes>
          </div>
        ) : (
          <p>No se encontraron resultados.</p>
        )}
      </div>
    </section>
  );
};

export default ResultSearch;
