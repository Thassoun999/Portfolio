import Image from "next/image";
import HomeButton from "@/components/HomeButton";

export default function Home() {
  const filePathLogoGif = "/Media/BackSun1_2025_Transparent.gif";
  // 355 x 261 - for Logo

  // TODO: Redraw all images giving them the same bounding box

  const Image1 = [
    "/Media/words1_unhover_transparent.gif",
    "/Media/words1_hover_transparent.gif",
  ];
  const Image2 = [
    "/Media/words2_unhover_transparent.gif",
    "/Media/Words2_hover_transparent.gif",
  ];
  const Image3 = [
    "/Media/words3_unhover_transparent.gif",
    "/Media/words3_hover_transparent.gif",
  ];
  return (
    <div>
      <main>
        <div className="flex flex-row w-full mt-5 mb-5">
          <div id="items-container" className="w-1/4 flex flex-col relative">
            <HomeButton pathnameUnhover={Image1[0]} pathnameHover={Image1[1]} />
            <HomeButton pathnameUnhover={Image2[0]} pathnameHover={Image2[1]} />
            <HomeButton pathnameUnhover={Image3[0]} pathnameHover={Image3[1]} />
          </div>
          <div className="w-3/4 relative aspect-2/1">
            <Image
              src={filePathLogoGif}
              alt="Logo Gif"
              className="object-contain"
              fill
              unoptimized
            />
          </div>
        </div>
      </main>
    </div>
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
