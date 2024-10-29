'use client';

import { useEffect } from 'react';

const BannerAd = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//www.highperformanceformat.com/28c7de5c619d5df00f95088c93e8dcb7/invoke.js";
        script.async = true;

        const atOptions = {
            key: '28c7de5c619d5df00f95088c93e8dcb7',
            format: 'iframe',
            height: 90,
            width: 728,
            params: {}
        };

        document.getElementById('ad-container')?.appendChild(script);
    }, []);

    return (
        <div className="flex justify-center items-center my-12 overflow-hidden">
            <div
                id="ad-container"
                className="w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden"
            >
                {/* Ad content will be injected here by the script */}
            </div>
        </div>
    );
};

export default BannerAd;

