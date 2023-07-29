import { useContext, useEffect, useRef, useState } from 'react';
import ContextProduct from '../../context/ContextProduct';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import useSmoothScrollTop from '../../hooks/useSmoothScrollTop';

// eslint-disable-next-line react/prop-types
const SearchBar = ({ showSearchBar, searchBarRef, onHide }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const { searchProducts } = useContext(ContextProduct);
  const navigate = useNavigate();
  const inputRef = useRef();
  const smoothScrollTop = useSmoothScrollTop();

  useEffect(() => {
    if (showSearchBar) {
      inputRef.current.focus();
    }
  }, [showSearchBar]);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    searchProducts(searchTerm);
    navigate(`/resultados?search=${searchTerm}`);
    smoothScrollTop();
    setSearchTerm('');
    onHide();
  };

  return (
    <div
      ref={searchBarRef}
      className={`fixed top-16 w-full z-30 font-roboto-condensed ${
        showSearchBar ? 'flex' : 'hidden'
      }`}
    >
      <div className='w-full max-w-7xl mx-auto flex justify-end items-end px-4'>
        <form
          onSubmit={handleFormSubmit}
          className='flex justify-end items-end w-full h-full max-w-[450px] shadow-[0_0_8px_4px_rgba(0,0,0,0.2)]  rounded-lg'
        >
          <input
            type='text'
            placeholder='Buscar...'
            value={searchTerm}
            onChange={handleInputChange}
            ref={inputRef}
            className='w-full px-4 py-2 rounded-l-lg bg-gray-200 outline-none focus:bg-gray-100 '
          />
          <button
            type='submit'
            className='flex flex-row h-full gap-4 justify-center items-center py-2 px-4 bg-complementary text-white rounded-r-lg hover:bg-primary-100'
          >
            <FaSearch className='h-full' />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
