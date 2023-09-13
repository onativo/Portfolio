import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active_section_context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme_switch";
import ThemeContextProvider from "@/context/theme_context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfólio | M Vinicios Nativo",
  description:
    "Fullstack developer com 3 anos de experiência -> Python, JS, HTML, CSS, Docker, SQL, NoSQL.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className} bg-slate-50 text-slate-950 pt-0 sm:pt-24 dark:bg-slate-800 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#a0b36dcb] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#acc566cb]"></div>
        <div className="bg-[#80f1d9] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-left-[68.75rem] md:left-[15rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left[-5rem] dark:bg-[#438072]"></div>
        <div className="bg-[#80f1d9] absolute top-[-1rem] -z-10 right-[0rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[20rem] sm:w-right-[68.75rem] md:right-[0rem] lg:right-[0rem] xl:right-[0rem] 2xl:right[0rem] dark:bg-[#438072]"></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="bottom-right" />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
