import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-[70]">
      <div 
        className="h-full bg-gradient-to-r from-neon-blue via-white to-neon-yellow transition-all duration-150 ease-out shadow-[0_0_10px_rgba(59,130,246,0.7)]"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};

export default ProgressBar;