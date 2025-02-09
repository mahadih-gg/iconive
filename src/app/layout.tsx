import type { Metadata } from "next";
import {Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
// import Newsletter from "@/components/common/Newsletter";
import PaymentBanner from "./_utils/payment-banner";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Iconive",
  description: "Iconive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header />
        {children}
        {/* <Newsletter />   */}
        <PaymentBanner />
        <Footer />
      </body>
    </html>
  );
}
