import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar,Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-primary ">
        <Navbar/>
        <main className='overflow-hidden relative'>
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
