import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { CountryContextProvider } from "@/features/countries";

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

export const metadata: Metadata = {
  title: "Elanco Interview Task",
  description: "A task that I was assigned for an interview with Elanco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <CountryContextProvider>{children}</CountryContextProvider>
      </body>
    </html>
  );
}
