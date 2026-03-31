"use client";

import { useEffect, useState } from "react";

export default function LoaderWrapper({
  children,
  duration = 2000,
}: {
  children: React.ReactNode;
  duration?: number;
}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-[#0D1116] transition-opacity duration-500 z-50 ${
          isLoading ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-[2.8px] border-[#00FF9C] border-t-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-[2.8px] border-[#7EAF87] border-b-transparent rounded-full animate-spin-reverse"></div>
        </div>
      </div>
      <div
        className={`transition-opacity duration-500 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        {children}
      </div>
    </>
  );
}