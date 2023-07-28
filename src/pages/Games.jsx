import { useEffect, useState } from 'react';
import Pruebas from './MenuPages/Pruebas';

const Games = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de una carga asíncrona
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className='flex justify-center w-full items-center h-screen'>
      {loading ? <Pruebas /> : <p>Contenido cargado correctamente.</p>}
    </div>
  );
};

export default Games;
