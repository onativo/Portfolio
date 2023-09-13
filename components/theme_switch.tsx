"use client";

import React from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import toggleTheme, { useTheme } from "@/context/theme_context";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="fixed bottom-5 right-5 bg-[#a0b36d7c] w-[2.5rem] h-[2.5rem] bg-opacity-80 backdrop-blur-[2rem] border border-slate-950 border-opacity-40 rounded-full shadow-2xl flex items-center justify-center dark:bg-[#acc56671] dark:border-white"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <BsSun className="hover:scale-[1.6] active:scale-105 transition-all" />
      ) : (
        <BsMoon className="hover:scale-[1.6] active:scale-105 transition-all dark:text-slate-950" />
      )}
    </button>
  );
}
