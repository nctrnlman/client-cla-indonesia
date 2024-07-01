import React, { useEffect } from 'react';

const LoadingSpinner = () => {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 z-50">
      <span className="loading loading-infinity loading-lg text-warning"></span>
    </div>
  );
};

export default LoadingSpinner;