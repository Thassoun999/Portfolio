import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function AGNYC() {
  const imageItems = [
    {
      src: "/Media/Portfolio/AGNYC/home.png",
      altText: "Abolitionist Guide to NYC - Home Page",
      width: 1906,
      height: 911,
    },
    {
      src: "/Media/Portfolio/AGNYC/screen1.png",
      altText: "Abolitionist Guide to NYC - Interactive Map Page",
      width: 1892,
      height: 906,
    },
    {
      src: "/Media/Portfolio/AGNYC/screen2.png",
      altText: "Abolitionist Guide to NYC - Audio Interview Page",
      width: 1901,
      height: 894,
    },
    {
      src: "/Media/Portfolio/AGNYC/screen3.png",
      altText: "Abolitionist Guide to NYC - Literary Catalog Page",
      width: 1899,
      height: 904,
    },
  ];
  return (
    <div className="my-5 mx-10 sm:mx-20 flex flex-col sm:flex-row justify-between sm:gap-10 items-start">
      <div className="space-y-2 sm:space-y-4 text-white w-full sm:w-1/2 mb-2">
        <Image
          src={"/Media/Assets/object_saturn.gif"}
          unoptimized
          alt={"Saturn Object"}
          className="mb-4"
          width={97}
          height={64}
        />
        <Link target="_blank" href={"https://abolitionistguide.nyc/"}>
          <h1 className="text-4xl md:text-6xl xl:text-7xl hover:text-red-400">
            Abolitionist Guide to NYC
          </h1>
        </Link>
        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Description</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          <i>Abolitionist Guide to NYC</i> is a free and publicly accessible
          guidebook that will provide a historical and geographic survey of
          jails and prisons in Manhattan from the Dutch colonization of
          Lenapehoking to the present day. Through archival research,
          interviews, art and poetry, photographs, maps, timelines, personal
          histories from current and formerly incarcerated people, and current
          organizing strategies, the guide desmystifies the formation of the
          prison industrial complex in New York City and highlight movements
          working to transform and abolish it. The goal is to provide context
          and resources for the concerned public, and facilitate connections for
          people organizing and learning today.
        </p>
        <br />
        <p className="text-2xl md:text-4xl xl:text-5xl">
          The Abolitionist Guide to NYC is a project sponsored by{" "}
          <Link
            target="_blank"
            className="underline hover:text-red-400"
            href={"https://www.interruptingcriminalization.com/"}
          >
            <b>Interrupting Criminalization</b>
          </Link>{" "}
          and funded by a 2025-2026 Imagining Freedom grant from the Mellon
          Foundation.
        </p>
        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Website</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          Designed and Developed the website for the{" "}
          <i>Abolitionist Guide to NYC</i> serving not only as the landing page
          for the book but also as an abolitionist resource hub through its
          literary catalog, audio interviews, and interactive map detailing key
          locations and events that are described within the book itself.
        </p>
        <br />
        <p className="text-2xl md:text-4xl xl:text-5xl">
          The interactive map is built on a custom-made library made by
          Backwards Sunrise and uses map data from QGIS and OpenSourceMap for
          its base.
        </p>
      </div>
      <div className="w-full sm:w-1/2 sm:pt-15">
        <Carousel loop>
          {imageItems.map((item, i) => {
            return (
              // flex[0_0_100%]
              //   - shorthand for flex-grow:0; flex-shrink:0; flex-basis:100%
              //   - we want this slide to not be able to grow or shrink and take up 100% width of the viewport.
              <div
                className="relative grow-0 shrink-0 basis-full h-80 sm:h-140"
                key={i}
              >
                {/* use object-cover + fill since we don't know the height and width of the parent */}
                <Image
                  src={item.src}
                  alt={item.altText}
                  width={1918}
                  height={906}
                  className="object-contain"
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}
