import React from "react";

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import FollowCursor from '../components/FollowCursur';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const BASE_URL =
  process.env.Base_URL ?? "err:Envronment_Variable_Is_Not_Defined";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  keywords: [
    "jasmyre",
    "lanuza",
    "jasmyree lanuza",
    "jasmyre review",
    "jasmyre lanuza facebook",
    "jasmyre andrei",
    "jasmyre andrei lanuza",
    "jasmyre andrei portfolio",
    "jasmyre lanuza vercel",
    "jasmyre lanuza github",
  ],
  title: {
    default: "Jasmyre Lanuza",
    template: "%s | Jasmyre Lanuza",
  },
  description:
    "My personal website portfolio: Minimalist Web Designer & Programmer; I create simple, clean, and efficient web solutions. I'm a web designer and programmer with a focus on creating minimal and functional websites that enhance user experience.",
  openGraph: {
    title: "Jasmyre Lanuza",
    url: new URL(BASE_URL),
    images: [
      {
        url: "/image.png",
        width: 1200,
        height: 630,
        alt: "Thumbnail image for " + process.env.BASE_URL,
      },
    ],
    description:
      "My personal website portfolio: Minimalist Web Designer & Programmer; I create simple, clean, and efficient web solutions. I'm a web designer and programmer with a focus on creating minimal and functional websites that enhance user experience.",
  },
  // other: {
  //   "google-site-verification": "Z_jFqVnsRqmwaQwrIPd9ey7fdRY4tunPiojllRX0yI0",
  // },
};

console.log(BASE_URL);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <FollowCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
