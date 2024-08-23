import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LITHIO Farming",
  description: "LITHIO Farming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="absolute w-full h-full flex flex-col font-publicsans text-white">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
