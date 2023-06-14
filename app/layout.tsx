
import Image from "next/image";
import Link from "next/link";
import "../styles/globals.css";

export const metadata = {
  title:{
    default: "DevZiaus's Blog",
    template: "%s | DevZiaus's Blog"
  }, 
  description: "Welcome to DevZiaus's tech Blog",
  author: "DevZiaus",
  keywords:{
    default: ['DevZiaus', 'Web Development', 'Web Design', 'programming', 'Technology',  'Linux', 'Tech', 'Blog', 'Tech Blog'],
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
      <div className="text-center bg-slate-600 p-8 my-6 rounded-md">
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
          <h1 className="text-2xl text-[#0095da] font-bold mt-4">DevZiaus's Blog</h1>
        </Link>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-600">
        <h3>&copy; Copyright <a className="transition-all ease-linear delay-150 text-[#0095da] hover:text-[#e68324]" href="https://www.devziaus.xyz" target="_blank">DevZiaus</a> | All rights reserved.</h3>
      </div>
    </footer>
  );

  return (
    <html>
      <body>
        <div className="mx-auto max-w-4xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
