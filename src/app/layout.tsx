import type { Metadata } from "next";
import { Geist, Geist_Mono, Honk, Poppins, Roboto_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import StickyContact from "@/components/StickyContact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const honk = Honk({
  variable: "--font-honk",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "STEVE WORLD",
  description: "NGANDA ONANA Steve Loic Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`poppins-font ${geistSans.variable} ${geistMono.variable} ${honk.variable} ${poppins.variable} ${robotoMono.variable} ${spaceGrotesk.variable} antialiased`}>
        <StickyContact />
        
        {children}
      </body>
    </html>
  );
}
