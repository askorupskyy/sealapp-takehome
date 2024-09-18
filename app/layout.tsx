import type { Metadata } from "next";

import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";

import "./globals.css";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

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
      <body className={cn(inter.className, "container bg-zinc-100")}>
        {children}
      </body>
    </html>
  );
}
