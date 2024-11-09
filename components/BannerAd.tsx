'use client';

import { useEffect } from 'react';

const BannerAd = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.setAttribute('data-cfasync', 'false');
        script.src = "//www.highperformanceformat.com/11ac13d83afc1ebbe1cb7054c1d752e5/invoke.js";
        script.async = true;

        const atOptions = {
            key: '11ac13d83afc1ebbe1cb7054c1d752e5',
            format: 'iframe',
            height: 300,
            width: 160,
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

