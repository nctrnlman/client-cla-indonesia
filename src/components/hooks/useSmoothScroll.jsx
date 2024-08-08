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

  const scrollToTopFromBottom = useCallback(() => {
    const scrollHeight = getScrollHeight();
    
    // First, scroll to the bottom instantly
    window.scrollTo(0, scrollHeight);

    // Then, after a short delay, smooth scroll to the top
    setTimeout(() => {
      if ('scrollBehavior' in document.documentElement.style) {
        // Use native smooth scrolling if supported
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Fallback for browsers that don't support smooth scrolling
        let currentPosition = window.pageYOffset;
        const scrollStep = -currentPosition / 20;

        const smoothScroll = () => {
          currentPosition += scrollStep;
          if (currentPosition > 0) {
            window.scrollTo(0, currentPosition);
            requestAnimationFrame(smoothScroll);
          } else {
            window.scrollTo(0, 0);
          }
        };

        requestAnimationFrame(smoothScroll);
      }
    }, 100); // Adjust this delay as needed
  }, []);

  useEffect(() => {
    scrollToTopFromBottom();
  }, [pathname, scrollToTopFromBottom]);
};

export default useSmoothScroll;