// src/hooks/useSmoothScroll.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useSmoothScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTopFromBottom = () => {
      // First, scroll to the bottom instantly
      window.scrollTo(0, document.body.scrollHeight);

      // Then, after a short delay, smooth scroll to the top
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100); // Adjust this delay as needed
    };

    scrollToTopFromBottom();
  }, [pathname]);
};

export default useSmoothScroll;