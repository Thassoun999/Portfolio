import type { Metadata } from "next";
import Image from "next/image";
import localFont from "next/font/local";
import "@/styles/globals.css";
import Link from "next/link";
import StarCanvas from "@/components/StarCanvas/StarCanvas";

export const Chalkboard200Regular = localFont({
  src: "../fonts/Chalkboard200Regular.ttf",
});

export const metadata: Metadata = {
  title: "Backwards Sunrise",
  description: "Portfolio and Business Website for Backwards Sunrise.",
  authors: [{ name: "Sydra (Tae) Hassoun" }],
};
// opacity-1 transition-opacity duration-1500 ease-out
export const bannerImage = "/Media/Assets/LogoTitleCombine.gif";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${Chalkboard200Regular.className} min-h-screen w-full`}>
        <StarCanvas className="fixed w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-100" />

        <header className="relative mt-5 mb-1 w-90/100 aspect-4/1 sm:w-3/4 mx-auto">
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
