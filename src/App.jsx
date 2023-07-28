import { Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import ProductDetails from './pages/MenuPages/ProductDetails';
import { Menu } from './pages/MenuPages/Menu';
import Pruebas from './pages/MenuPages/Pruebas';
import Games from './pages/Games';
import ShoppingCart from './pages/ShoppingCart';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <div className='relative'>
        <header className='w-full relative z-20'>
          <Navbar />
        </header>
        <main>
          <Outlet />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/menu/:category/:id' element={<ProductDetails />} />
            <Route path='/juegos' element={<Games />} />
            <Route path='/contacto' element={<Contact />} />
            <Route path='/carrito' element={<ShoppingCart />} />
            <Route path='/pruebas' element={<Pruebas />} />
          </Routes>
        </main>
        <hr />
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
