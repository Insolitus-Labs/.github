import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Apexify",
  description: "AI-Powered Fraud Detection on Solana",
  generator: 'v0.dev',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://apexify-public-assets.vercel.app/hero-image.jpeg"
          as="image"
        />
        <link
          rel="icon"
          href="https://apexify-public-assets.vercel.app/favicon.ico"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
