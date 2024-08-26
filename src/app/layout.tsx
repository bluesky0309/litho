import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Layout/footer";
import Header from "@/components/Layout/Header";
import { ChainContextProvider } from "@/context/chainContext";
import { LpContextProvider } from "@/context/LpContext";

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
          <ChainContextProvider>
            <LpContextProvider>
            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar={true}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              className="text-black"
            />
              <Header />
              {children}
              <Footer />
            </LpContextProvider>
          </ChainContextProvider>
        </div>
      </body>
    </html>
  );
}
