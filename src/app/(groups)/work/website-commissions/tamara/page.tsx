import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function Tamara() {
  const imageItems = [
    {
      src: "/Media/Portfolio/TamaraSite/screen1.png",
      altText: "Tamara Santibañez Website - Exhibitions",
      width: 1891,
      height: 868,
    },
    {
      src: "/Media/Portfolio/TamaraSite/screen2.png",
      altText: "Tamara Santibañez Website - Tattoo Gallery",
      width: 1914,
      height: 909,
    },
    {
      src: "/Media/Portfolio/TamaraSite/screen3.png",
      altText: "Tamara Santibañez Website - Writing",
      width: 1918,
      height: 906,
    },
  ];

  return (
    <div className="my-5 mx-10 sm:mx-20 flex flex-col sm:flex-row justify-between sm:gap-10 items-start">
      <div className="space-y-2 sm:space-y-4 text-white w-full sm:w-1/2 mb-2">
        <Image
          src={"/Media/Assets/object_ship.gif"}
          unoptimized
          alt={"Saturn Object"}
          className="mb-4"
          width={89}
          height={85}
        />
        <Link target="_blank" href={"https://tamarasantibanez.com/"}>
          <h1 className="text-4xl md:text-6xl xl:text-7xl hover:text-red-400">
            Tamara Santibañez Portfolio
          </h1>
        </Link>
        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Description</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          Tamara Santibañez is an interdisciplinary artist and oral historian
          based in Brooklyn, New York. Their practice employs storytelling,
          archival research, tattooing, and craft-based sculpturaltechniques to
          interrogate the ways in which hostile architectures, borders, and
          coded languages are re/produced and re/interpreted on the body.
        </p>
        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Website</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          Designed and developed a user-extensible website portfolio for Tamara
          Santibañez's various works as well as a point of contact for future
          commissions and projects. For extensibility, an admin page was
          provided in which the user is able to edit text fields, add
          multi-media entries, extend new project pages, and provide their own
          accessibility captions.
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
