// components/ScrollTopButton.tsx
"use client";

import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-24 right-5 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-primary-600 text-white shadow-premium transition-all duration-300 hover:bg-primary-700 hover:scale-110 active:scale-95 animate-fade-in"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}