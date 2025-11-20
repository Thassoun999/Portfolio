import NavButton from "@/components/NavButton";
import Image from "next/image";

export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Image1 = [
    "/Media/words1_new_unhover_transparent.gif",
    "/Media/words1_new_hover_transparent.gif",
  ];
  const Image2 = [
    "/Media/words2_new_unhover_transparent.gif",
    "/Media/Words2_new_hover_transparent.gif",
  ];
  const Image3 = [
    "/Media/words3_new_unhover_transparent.gif",
    "/Media/words3_new_hover_transparent.gif",
  ];

  const filePathLogoGif = "/Media/BackSun1_2025_new_Transparent.gif";

  return (
    <>
      <nav className="sticky justify-between flex flex-row mt-2 mx-auto w-8/9 border border-t-[#2f2f27]">
        <div className="inline">
          <NavButton
            hrefLink="about"
            pathnameUnhover={Image1[0]}
            pathnameHover={Image1[1]}
            className="mt-1 sm:mt-2"
          />
          <NavButton
            hrefLink="/contact"
            pathnameUnhover={Image2[0]}
            pathnameHover={Image2[1]}
          />
          <NavButton
            hrefLink="/work"
            pathnameUnhover={Image3[0]}
            pathnameHover={Image3[1]}
          />
        </div>
        <p className="text-white">LOGO GOES HERE</p>
      </nav>
      {children}
    </>
  );
}

/*
        <Image
          src={filePathLogoGif}
          alt="Logo Gif"
          className="w-full aspect-3/2 object-contain items-center"
          fill
          unoptimized
        />
*/
