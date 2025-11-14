import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const Chalkboard200Regular = localFont({
  src: "../fonts/Chalkboard200Regular.ttf",
});

export const metadata: Metadata = {
  title: "Backwards Sunrise",
  description: "Portfolio and Business Website for Backwards Sunrise.",
  authors: [{ name: "Sydra (Tae) Hassoun" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${Chalkboard200Regular.className} bg-no-repeat bg-full-size bg-[url(/Media/Galaxy_chalk_bg_3.png)] antialiased`}
      >
        <div className="bg-red-900/50">
          <p>Header</p>
        </div>
        {children}
      </body>
    </html>
  );
}
