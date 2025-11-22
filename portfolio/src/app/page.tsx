import Image from "next/image";
import HomeButton from "@/components/HomeButton";

export default function Home() {
  const filePathLogoGif = "/Media/BackSun1_2025_new_Transparent.gif";

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

  return (
    <main>
      <div className="flex flex-col items-center sm:flex-row sm:w-3/4 mt-5 mb-5 mx-auto gap-6">
        <div
          id="items-container"
          className="flex flex-col relative w-80/100 sm:w-4/5"
        >
          <HomeButton
            hrefLink="/about"
            pathnameUnhover={Image1[0]}
            pathnameHover={Image1[1]}
            className="aspect-6/1 sm:aspect-3/1"
          />
          <HomeButton
            hrefLink="/contact"
            pathnameUnhover={Image2[0]}
            pathnameHover={Image2[1]}
            className="aspect-6/1 sm:aspect-3/1"
          />
          <HomeButton
            hrefLink="/work"
            pathnameUnhover={Image3[0]}
            pathnameHover={Image3[1]}
            className="aspect-6/1 sm:aspect-3/1 ml-4 sm:ml-0"
          />
        </div>
        <div className="w-full relative aspect-3/2 sm:aspect-21/20">
          <Image
            src={filePathLogoGif}
            alt="Logo Gif"
            className="object-contain sm:object-left pb-5"
            fill
            unoptimized
          />
        </div>
      </div>
    </main>
  );
}

/*

            <HomeButton pathnameUnhover={Image1[0]} pathnameHover={Image1[1]} />
            <HomeButton pathnameUnhover={Image2[0]} pathnameHover={Image2[1]} />
            <HomeButton pathnameUnhover={Image3[0]} pathnameHover={Image3[1]} />
*/

/*
aspect[355/261]
"Keep this element at a width:height ratio of 355 to 261."

When using Image fill, Next.js sets image to (position: absolute, [top, left, bottom, right]: 0)
The parent MUST have a height or else image collapses to 0 height 
Instead of giving the parent a fixed pixel height (bad for responsiveness), you give it an aspect ratio:
This makes the browser calculate height automatically based on width.
*/
