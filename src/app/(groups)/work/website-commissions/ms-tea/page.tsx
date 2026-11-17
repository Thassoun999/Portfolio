import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function MSTEA() {
  const imageItems = [
    {
      src: "/Media/Portfolio/MsTea/screen1.png",
      altText: "Ms Tea Botanica - Consultation Page w/ Cal.com Widget",
      width: 1783,
      height: 845,
    },
    {
      src: "/Media/Portfolio/MsTea/screen2.png",
      altText: "Ms Tea Botanica - Cal.com Widget Activated",
      width: 1767,
      height: 851,
    },
  ];

  return (
    <div className="my-5 mx-10 sm:mx-20 flex flex-col sm:flex-row justify-between sm:gap-10 items-start">
      <div className="space-y-2 sm:space-y-4 text-white w-full sm:w-1/2 mb-2">
        <Image
          src={"/Media/Assets/object_diamond.gif"}
          width={123}
          height={110}
          unoptimized
          alt={"Diamond Object"}
          className=""
        />
        <Link
          target="_blank"
          href={"https://msteabotanica.squarespace.com/about"}
        >
          <h1 className="text-4xl md:text-6xl xl:text-7xl hover:text-red-400">
            Ms. Tea Botanica
          </h1>
        </Link>
        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Description</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          Laurel Birch (they/she) is a bioregional herbalist, artist, medicine
          maker and founder of Ms. Tea. Their clinical practice and product line
          weaves relational & liberatory care for people of all genders and
          levels of access. Laurel offers sliding scale herbal consultations and
          classes that support holistic, trans-affirming care of people & plant
          webs rooted in anti-oppression, trauma experienced and structurally
          competent frameworks.
        </p>
        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Website Commission</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          Extended Ms. Tea Botanica's consultation page by implementing code
          embeded widgets that create a pop-up for their Cal account calendar
          when clicked. Cal is an online calendar scheduling application used
          for business and providers.
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
                  height={847}
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
