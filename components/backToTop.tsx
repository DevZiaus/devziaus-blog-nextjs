// components/BackToTopButton.tsx
"use client";  // Add this line to make it a client component

import { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled beyond 300px
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-4 p-3 hover:bg-[#0095da] text-white rounded-full shadow-lg bg-[#e68324] transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
      aria-label="Back to Top"
    >
      ↑
    </button>
  );
};

export default BackToTopButton;
