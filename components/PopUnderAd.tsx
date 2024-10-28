// components/ClientAdScript.tsx
'use client';
import { useEffect } from 'react';

const PopUnderAd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//pl24838364.profitablecpmrate.com/02/26/25/02262561351d4f0841785273aa55f6dc.js';
    script.type = 'text/javascript';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      // Optional: Clean up the script when component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return null; // No JSX needed as this component is for loading the script only
};

export default PopUnderAd;
