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

export const bannerImage = "/Media/LogoTitleCombine.gif";

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
        <header className="relative mt-5 mb-1 w-90/100 aspect-3/1 sm:w-3/4 mx-auto">
          <Link href="/" id="banner">
            <Image
              src={bannerImage}
              className="object-contain"
              fill
              unoptimized
              alt="Banner Gif"
            />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}

//bg-no-repeat bg-full-size bg-[url(/Media/Galaxy_chalk_bg_4.png)] antialiased
// fill sets position to absolute and inset to 0, so we need the parent to be
// 1) Relative
// 2) An aspect ratio container that gives the parent element height without needing to know image's real dimensions
