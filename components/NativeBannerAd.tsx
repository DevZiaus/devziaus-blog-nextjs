'use client'

import { useEffect } from 'react';

const NativeBannerAd = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.setAttribute('data-cfasync', 'false');
        script.async = true;
        script.setAttribute("data-cfasync", "false");
        script.src = "//pl24838472.profitablecpmrate.com/e1ca6e6c4c82814f2f38f548c989b08f/invoke.js";

        const container = document.getElementById("container-e1ca6e6c4c82814f2f38f548c989b08f");
        container?.appendChild(script);
    }, []);

    return (
        <div className="flex justify-center items-center my-12 overflow-hidden">
            <div id="container-e1ca6e6c4c82814f2f38f548c989b08f" className='w-full max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl overflow-hidden'></div>
        </div>
    );
}

export default NativeBannerAd;
