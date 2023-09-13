import React from "react";

export default function Footer() {
  return (
    <footer className="mb-2 px-4 text-center text-slate-600 dark:text-white">
      <small className="mb-2 text-xs block">
        &copy; 2023 - Desenvolvido por{" "}
        <a href="https://www.linkedin.com/in/onativo/" target="_blank">
          M. Vinicios Nativo
        </a>
      </small>
      <p className="text-xs">
        Construído com React & Next.js (AppRouter and Server Actions),
        TypeScript, TailwindCSS, Framer Motion, React Email & Resend. <br />
      </p>
      <p className="text-bold text-xs">Vercel hosting.</p>
    </footer>
  );
}