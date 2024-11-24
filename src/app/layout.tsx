import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { CountryContextProvider } from "@/features/countries";

const roboto = Roboto({
  weight: ["100", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  preload: false,
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
      <body className={roboto.className}>
        <CountryContextProvider>{children}</CountryContextProvider>
      </body>
    </html>
  );
}
