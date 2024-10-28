'use client'

import { useEffect } from 'react';

const BannerAd = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = '//www.highperformanceformat.com/28c7de5c619d5df00f95088c93e8dcb7/invoke.js';
        script.async = true;

        const atOptions = {
            key: '28c7de5c619d5df00f95088c93e8dcb7',
            format: 'iframe',
            height: 90,
            width: 728,
            params: {}
        };

        document.querySelector('.ad-container')?.appendChild(script);

        return () => {
            // Clean up by removing the script when the component unmounts
            document.querySelector('.ad-container')?.removeChild(script);
        };
    }, []);

    return (
        <div className="flex justify-center items-center my-12 ad-container" style={{ height: 90, width: 728 }}>
            {/* The ad iframe will be loaded here */}
        </div>
    );
}

export default BannerAd;
