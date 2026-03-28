"use client";

import { useState, useEffect } from "react";

type Lang = "it" | "gb";

export default function Header() {
  const [lang, setLang] = useState<Lang>("it");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const switchLang = (): void => {
    setLang((prev) => (prev === "it" ? "gb" : "it"));
  };

  if (!mounted) return null;

  return (
    <div className="w-full h-14 rounded-bl-[3.3rem] bg-[#242D38] flex items-center justify-between p-8">
      <img className="h-12" src="logo/ectosweet-logo.png" alt="Logo" />

      <button
        onClick={switchLang}
        className="flex items-center p-1.5 border-2 border-[#00FF9C] w-9 h-9 rounded-full bg-[#00FF9C]/25 
        transition-all duration-200 hover:scale-110 active:scale-95"
      >
        <img
          className="h-36 transition-transform duration-300"
          src={
            lang === "it"
              ? "flags/Flag-italy.svg"
              : "flags/Flag_of_the_United_Kingdom_(3-5).svg"
          }
          alt="Language flag"
        />
      </button>
    </div>
  );
}