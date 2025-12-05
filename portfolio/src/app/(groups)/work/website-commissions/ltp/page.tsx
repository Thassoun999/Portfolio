import Carousel from "@/components/Carousel/Carousel";
import Image from "next/image";
import Link from "next/link";

export default function LTP() {
  const imageItems = [
    {
      src: "/Media/Portfolio/LTP_1.png",
      altText: "LTP Home",
    },
    {
      src: "/Media/Portfolio/LTP_2.png",
      altText: "LTP About",
    },
    {
      src: "/Media/Portfolio/LTP_3.png",
      altText: "LTP Support",
    },
  ];

  return (
    <div className="my-5 mx-10 sm:mx-20 flex flex-col sm:flex-row justify-between sm:gap-5 items-center">
      <div className="space-y-2 sm:space-y-4 text-white w-full sm:w-1/2 mb-2">
        <Image
          src={"/Media/Assets/object_saturn.gif"}
          unoptimized
          alt={"Saturn Object"}
          className=""
          width={97}
          height={64}
        />

        <Link href={"https://letstalkpalestine.com/"}>
          <h1 className="text-4xl md:text-6xl xl:text-7xl hover:text-red-400">
            LTP
          </h1>
        </Link>
        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Description</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          LTP is an online educational channel that strives to foster a culture
          of liberation by educating audiences to navigate historical and
          contemporary Palestinian issues.
        </p>
        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">
          Website Developer and Designer
        </h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          Designed and developed the current iteration of the LTP website, its
          resource organization, widgets, central donations widget, and
          historichal archiving. This is a continued project and as of right now
          I am still engaged in maintenance and adding new web features.
        </p>
      </div>
      <div className="w-full sm:w-1/2 sm:py-2">
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
                  fill
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
