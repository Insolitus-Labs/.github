import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import type React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Apexify",
  description: "AI-Powered Fraud Detection on Solana",
  generator: 'v0.dev',
  applicationName: "Apexify",
  keywords: ["AI", "Fraud Detection", "Solana", "Blockchain", "Security"],
  authors: [{ name: "Apexify Team", url: "https://apexify.com" }],
  creator: "Apexify",
  themeColor: "#000000",
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Apexify - AI-Powered Fraud Detection",
    description: "Protect your assets with AI-driven fraud detection on Solana.",
    url: "https://apexify.com",
    siteName: "Apexify",
    type: "website",
    images: [
      {
        url: "https://apexify-public-assets.vercel.app/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Apexify Fraud Detection",
      },
    ],
  },
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
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta property="og:image" content="https://apexify-public-assets.vercel.app/og-image.jpeg" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
