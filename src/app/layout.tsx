import type { Metadata } from "next";
import { Margarine } from "next/font/google";
import "./globals.css";

const margarine = Margarine({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Benson",
  description: "Arko Roy Badhon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={margarine.className}>{children}</body>
    </html>
  );
}
