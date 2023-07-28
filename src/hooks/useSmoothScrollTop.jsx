import { useEffect, useState } from 'react';

const useSmoothScrollTop = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const handleScrollToTop = () => {
    if (isMounted) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return handleScrollToTop;
};

export default useSmoothScrollTop;
