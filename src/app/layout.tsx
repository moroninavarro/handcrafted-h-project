import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Handcrafted Haven",
  description: "Marketplace for handmade products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
    lang="en"
    className={`${inter.variable} ${newsreader.variable}`}
    >

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      
      <body className="bg-[#f4f7fb] text-black">
       
          <Navbar />

          <main className="flex flex-col items-center p-6 pt-40 text-center md:ml-64 md:items-start md:pt-6 md:text-left">
            {children}
          </main>

      </body>
    </html>
  );
}
