import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";

export const Chalkboard200Regular = localFont({
  src: "../fonts/Chalkboard200Regular.ttf",
});

export const metadata: Metadata = {
  title: "Backwards Sunrise",
  description: "Portfolio and Business Website for Backwards Sunrise.",
  authors: [{ name: "Sydra (Tae) Hassoun" }],
};

export const heroImage = "/Media/LogoTitleCombine.gif";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Chalkboard200Regular.className} bg-no-repeat bg-full-size bg-[url(/Media/stars_back1.jpg)] min-h-screen w-full`}
      >
        <header className="p-3 flex flex-col">
          <Link href="/" id="hero" className="relative aspect-12/2">
            <Image
              src={heroImage}
              className="object-contain"
              fill
              unoptimized
              alt="Hero Gif"
            />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}

//bg-no-repeat bg-full-size bg-[url(/Media/Galaxy_chalk_bg_4.png)] antialiased
