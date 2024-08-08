import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

const useSmoothScroll = () => {
  const { pathname } = useLocation();

  const getScrollHeight = () => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  const scrollToTop = useCallback((duration = 500) => {
    const start = window.pageYOffset;
    const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    const scroll = () => {
      const now = 'now' in window.performance ? performance.now() : new Date().getTime();
      const time = Math.min(1, (now - startTime) / duration);
      window.scrollTo(0, Math.ceil((1 - time) * start));

      if (time < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  }, []);

  const handlePageLoad = useCallback(() => {
    // Delay the scroll to top to ensure content is loaded
    setTimeout(() => {
      scrollToTop(800);  // Adjust duration as needed
    }, 100);  // Adjust delay as needed
  }, [scrollToTop]);

  useEffect(() => {
    // Add event listener for page load
    window.addEventListener('load', handlePageLoad);

    // Cleanup
    return () => {
      window.removeEventListener('load', handlePageLoad);
    };
  }, [handlePageLoad]);

  useEffect(() => {
    // Scroll to top on pathname change
    scrollToTop(800);  // Adjust duration as needed
  }, [pathname, scrollToTop]);
};

export default useSmoothScroll;