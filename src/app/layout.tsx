import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
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
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} 
      ${newsreader.variable}`}>

      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body className="bg-[var(--color-background)] text-[var(--color-text)]">
        <CartProvider>
          <Navbar />
          <main className="flex flex-col items-center p-6 pt-45 md:pt-6 md:ml-64">
            {children}
        </main>
      </CartProvider>
      </body>
    </html>
  );
}
