import { useEffect, useRef } from 'react';
import Button from '../components/buttons/Button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useScrolled from '../hooks/useScrolled';
import useSmoothScrollTop from '../hooks/useSmoothScrollTop';
import ButtonToTop from '../components/buttons/ButtonToTop';
import styles from '../styles';

const Home = () => {
  const animationText = useRef([]);
  const textHero = useRef();
  const scrolled = useScrolled();
  const smoothScrollTop = useSmoothScrollTop();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    animationText.current.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: -400, scale: 0.5 },
        {
          opacity: 1,
          y: 0,
          scale: 1.2,
          duration: 1.5,
          scrollTrigger: {
            trigger: el,
            scrub: true,
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    const el = textHero.current;
    gsap.fromTo(
      el,
      { y: 300, opacity: 0 },
      {
        y: 0,
        // scale: 1,
        opacity: 1,
        duration: 1,
      }
    );
  }, []);
  return (
    <>
      <section className='bg-home-hero w-full h-screen hero bg-cover bg-no-repeat bg-fixed bg-center'>
        <div className='flex flex-col justify-evenly items-center h-full w-full max-w-7xl mx-auto'>
          <img
            src='/src/assets/logo1.webp'
            alt='logo'
            className='hidden md:block w-auto sm:max-w-[300px] transition-all duration-300 ease-linear'
          />
          <div
            className='flex flex-col justify-center items-center gap-4'
            ref={textHero}
          >
            <h1 className='font-lobster text-4xl md:text-5xl text-white text-center'>
              Crepes hechas con amor, servidas con sonrisas
            </h1>
            <p className='font-roboto-condensed  text-white text-base md:text-2xl mb-4'>
              Dulces o saladas, crepes que enamoran
            </p>
          </div>
        </div>
      </section>
      <section
        className={`${styles.sectionHome} bg-gradient-secondary-left-Bottom`}
      >
        <div className={`${styles.boxHome}`}>
          <img
            src='https://res.cloudinary.com/dwweg4aud/image/upload/v1690244027/crepes/crepes/crepe1_c5msit.webp'
            alt='crepes'
            className='w-auto md:max-w-[495px]'
          />
          <div
            className='flex flex-col justify-center items-center gap-2'
            // ref={animationText}
            ref={(el) => (animationText.current[0] = el)}
          >
            <h4 className='font-lobster capitalize text-4xl md:text-5xl text-white text-center'>
              nombre crepes
            </h4>
            <p className='font-roboto-condensed uppercase text-white text-base md:text-xl mb-4'>
              descripcion
            </p>
            <Button type='button' text='ver más' />
          </div>
        </div>
      </section>
      <section
        className={`${styles.sectionHome}  bg-gradient-primary-right-Bottom`}
      >
        <div className={`${styles.boxHome}`}>
          <div
            className='flex flex-col justify-center items-center gap-2'
            ref={(el) => (animationText.current[1] = el)}
          >
            <h4 className='font-lobster capitalize text-4xl md:text-5xl text-white text-center'>
              nombre waffles
            </h4>
            <p className='font-roboto-condensed uppercase text-white text-base md:text-xl mb-4'>
              descripcion
            </p>
            <Button type='button' text='ver más' />
          </div>
          <img
            src='https://res.cloudinary.com/dwweg4aud/image/upload/v1690244694/crepes/waffles/waffle2_vhgn3y.webp'
            alt='crepes'
            className='w-auto md:max-w-[495px]'
          />
        </div>
      </section>
      <section
        className={`${styles.sectionHome} bg-gradient-highlight-right-Top`}
      >
        <div className={`${styles.boxHome}`}>
          <img
            src='https://res.cloudinary.com/dwweg4aud/image/upload/v1690058042/crepes/panqueques/pancake4_b3vfky.webp'
            alt='crepes'
            className='w-auto md:max-w-[495px]'
          />
          <div
            className='flex flex-col justify-center items-center gap-2 split'
            ref={(el) => (animationText.current[2] = el)}
          >
            <h4 className='font-lobster capitalize text-4xl md:text-5xl text-white text-center'>
              nombre pancakes
            </h4>
            <p className='font-roboto-condensed uppercase text-white text-base md:text-xl mb-4'>
              descripcion
            </p>
            <Button type='button' text='ver más' />
          </div>
        </div>
      </section>
      <section className='w-full h-[50vh]'>
        <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-full'>
          <div className='hidden sm:block bg-vegan-hero bg-cover bg-no-repeat bg-center'></div>
          <div className='bg-white flex flex-col justify-center items-center gap-4'>
            <h4 className='font-lobster capitalize text-4xl md:text-5xl text-complementary'>
              menu vegano
            </h4>
            <ul className='list-disc list-inside text-complementary text-base mb-8'>
              <li>item1</li>
              <li>item2</li>
              <li>item3</li>
              <li>item4</li>
              <li>item5</li>
            </ul>
            <button
              type='button'
              className='text-complementary hover:text-primary-100 font-roboto-condensed text-base w-full max-w-[150px] transition-all duration-300 ease-linear'
            >
              ver más
            </button>
          </div>
        </div>
        <ButtonToTop scrolled={scrolled} smoothScrollTop={smoothScrollTop} />
      </section>
    </>
  );
};

export default Home;
