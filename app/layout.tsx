
// import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";
import PopUnderAd from '../components/PopUnderAd';
import SocialBarAd from '../components/SocialBarAd';

export const metadata = {
  title:{
    default: "DevZiaus's Blog",
    template: "%s | DevZiaus's Blog"
  }, 
  description: "Welcome to DevZiaus's Blog, your go-to resource for insights into web    development, programming, Linux, and the latest in technology. Whether you're a beginner or an experienced developer, our blog offers tutorials, tips, and educational content to help you stay ahead in the tech world. Explore topics ranging from coding best practices to web design trends, and elevate your skills with our expert-driven articles.",
  author: "DevZiaus",
  keywords:{
    template: ['%s','%s',]
  }, 
  robots: "index, follow",
  
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-[#DBFCFF] p-8 my-6 rounded-md">
      <Link href="/">
          <Image
            src="/logo.png"
            width={60}
            height={60}
            className="mx-auto"
            alt={"logo"}
          />
        </Link>
        <Link href="/">
          <h1 className="text-2xl text-[#05233E] font-bold mt-4">DevZiaus's Blog</h1>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="flex md:flex-row flex-col justify-between items-center border-t border-slate-400 mt-12 py-6 text-center text-slate-600">
        <h3>&copy; Copyright <a className="transition-all ease-linear delay-150 text-[#0095da] hover:text-[#e68324]" href="https://www.devziaus.xyz" target="_blank" aria-label='Visit DevZiaus'>DevZiaus</a> | All rights reserved.</h3>
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
      
    </footer>
  );

  return (
    <html lang='en'>
      <head>
      <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VZB8PZ7ZCY"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VZB8PZ7ZCY');
          `}
        </Script>

         {/* Google AdSense Script */}
         <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1002426051951313"
          crossOrigin="anonymous"
        />

        {/*Ad Script */}

        <Script id="pop-under-ad" dangerouslySetInnerHTML={{ __html: PopUnderAd }} />
      </head>
      <body>
        <div className="mx-auto max-w-4xl px-6">
          {header}
          {children}
          {footer}
        </div>
        {/* Ad components */}
        <SocialBarAd />
      </body>
    </html>
  );
}
