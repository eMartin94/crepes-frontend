import { useContext, useEffect, useRef, useState } from 'react';
import { FaSearch, FaBars, FaShoppingCart } from 'react-icons/fa';
import { navLinks } from '../constants/constants';
import { Link, NavLink } from 'react-router-dom';
import useScrolled from '../hooks/useScrolled';
import useSmoothScrollTop from '../hooks/useSmoothScrollTop';
import ContextProduct from '../context/ContextProduct';
import SearchBar from './forms/SearchBar';
import Tooltip from './Tooltip';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const scrolled = useScrolled();
  const smoothScrollTop = useSmoothScrollTop();
  const { cart } = useContext(ContextProduct);
  const cartLength = cart.length;

  const [showSearchBar, setShowSearchBar] = useState(false);
  const searchBarRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        searchBarRef.current &&
        !searchBarRef.current.contains(event.target)
      ) {
        setShowSearchBar(false);
      }
    };

    if (showSearchBar) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [showSearchBar]);

  const handleSearchBar = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleNavbar = () => {
    setToggle(!toggle);
  };

  // const handleSearch = (searchTerm) => {
  //   console.log(searchTerm);
  // };

  return (
    <>
      <div
        className={`w-full flex justify-center items-center ${
          scrolled && !toggle
            ? 'bg-primary-100  shadow-md backdrop-blur-lg'
            : 'bg-opacity-0'
        } transition-all duration-300 ease-linear fixed font-roboto-condensed`}
      >
        <nav
          className={`w-full h-full flex justify-between items-center max-w-7xl px-4 py-2  text-lg`}
        >
          <Link
            to='/'
            className='visible md:invisible w-[45px] h-[45px] transition-all mr-0 sm:mr-[100px] duration-300 ease-linear'
            onClick={smoothScrollTop}
          >
            <img
              src='/src/assets/logo1.webp'
              alt='logo'
              className='w-full h-full object-contain invert'
            />
          </Link>
          <ul className='hidden md:flex items-center justify-center gap-4'>
            {navLinks.map((link) => (
              <li key={link.to} className='uppercase font-semibold'>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? `${scrolled ? 'text-white' : 'text-primary-100'}`
                      : `${
                          !scrolled
                            ? 'text-complementary hover:text-primary-100'
                            : 'text-complementary hover:text-white'
                        } cursor-pointer drop-shadow-md transition-all duration-300 ease-linear`
                  }
                  onClick={smoothScrollTop}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='flex items-center justify-center gap-4'>
            <button
              className={`hidden md:block text-complementary  ${
                scrolled ? 'hover:text-white ' : ' hover:text-primary-100'
              } transition-all duration-300 ease-linear`}
            >
              Mi cuenta
            </button>
            <div className='flex justify-center items-center gap-2'>
              <Tooltip text='Buscar productos'>
                <button
                  className={` text-complementary  ${
                    scrolled ? 'hover:text-white ' : ' hover:text-primary-100'
                  } transition-all duration-300 ease-linear`}
                >
                  <FaSearch onClick={handleSearchBar} />
                </button>
              </Tooltip>
              <Tooltip text='Ir al carrito'>
                <Link
                  to='/carrito'
                  className={`flex h-full justify-center items-center relative text-complementary  ${
                    scrolled ? 'hover:text-white ' : ' hover:text-primary-100'
                  } transition-all duration-300 ease-linear`}
                  onClick={smoothScrollTop}
                >
                  <FaShoppingCart />
                  {cartLength > 0 && (
                    <span className='absolute -top-3 -right-3 text-xs bg-highlight w-[20px] h-[20px] p-2 rounded-full flex justify-center items-center text-white transition-all duration-300 ease-linear'>
                      {cartLength}
                    </span>
                  )}
                </Link>
              </Tooltip>
            </div>
            <button
              className={`md:hidden block z-20 ${
                toggle
                  ? `${
                      scrolled
                        ? 'text-complementary hover:text-white'
                        : 'text-complementary hover:text-white'
                    }`
                  : `${
                      !scrolled
                        ? 'text-complementary hover:text-primary-100'
                        : 'text-complementary hover:text-white'
                    }`
              } transition-all duration-300 ease-linear`}
              onClick={handleNavbar}
            >
              <FaBars />
            </button>
          </div>
        </nav>
        <nav
          className={`flex flex-col bg-primary-100 items-center justify-center gap-4 absolute top-0 w-[300%] h-screen  text-lg ${
            toggle
              ? 'scale-100 backdrop-blur-lg'
              : 'scale-0 translate-x-[0] -translate-y-[100%]'
          } transition-all duration-1000 ease-in-out `}
        >
          <ul className='flex flex-col items-center justify-center gap-4'>
            {navLinks.map((link) => (
              <li key={link.to} className='uppercase font-semibold'>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-white'
                      : 'text-complementary hover:text-white cursor-pointer drop-shadow-md transition-all duration-300 ease-linear'
                  }
                  onClick={() => {
                    smoothScrollTop();
                    setToggle(!toggle);
                  }}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
          </ul>
          <button className=' text-complementary hover:text-white transition-all duration-300 ease-linear'>
            Mi cuenta
          </button>
        </nav>

        <SearchBar
          showSearchBar={showSearchBar}
          searchBarRef={searchBarRef}
          onHide={() => setShowSearchBar(false)}
        />
      </div>
    </>
  );
};

export default Navbar;
