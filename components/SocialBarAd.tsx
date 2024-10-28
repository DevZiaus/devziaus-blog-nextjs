// components/ClientFooterAdScript.tsx
'use client';
import { useEffect } from 'react';

const ClientFooterAdScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//pl24838404.profitablecpmrate.com/ab/a8/3b/aba83b5fe70790dd981dd95e4a025a8c.js';
    script.type = 'text/javascript';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Optional: Clean up the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible output, only loading the script
};

export default ClientFooterAdScript;