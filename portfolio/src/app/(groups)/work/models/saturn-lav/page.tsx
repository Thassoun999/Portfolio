import SaturnLavenderComp from "@/components/3DC/SaturnLavenderComp";
import Link from "next/link";
import Image from "next/image";

export default function SaturnLavender() {
  const saturnRed = "/Media/3DModels/Saturn_Red.glb";
  const saturnPurple = "/Media/3DModels/Saturn_Purple.glb";

  const imageItems = [
    {
      src: "/Media/Portfolio/SaturnLav/keychain3_side1.png",
      altText: "Blender Model",
    },
    {
      src: "/Media/Portfolio/SaturnLav/Capture.PNG",
      altText: "Print Capture",
    },
    {
      src: "/Media/Portfolio/SaturnLav/IMG-7235 - Copy.jpg",
      altText: "Finished Print",
    },
  ];

  return (
    <div className="my-5 mx-10 sm:mx-20">
      <div>
        <div className="space-y-2 sm:space-y-4 text-white w-full mt-5 sm:mt-10">
          <h1 className="text-4xl md:text-6xl xl:text-7xl ">Saturn Lavender</h1>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            The following is a modeled and 3D printed keychain for the Saturn
            Lavender music project. This keychain was first designed in Blender
            before printed on a Prusa Mini+ Printer. These keychains were then
            sold as merchandise for the Saturn Lavender music project.
          </p>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            Link:{" "}
            <Link
              className="hover:text-red-400"
              href={"https://www.xandralouvre.com/"}
            >
              Xander Louver
            </Link>
          </p>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            The two models below represent the keychains made in Blender.
            <br />
            They can be rotated with a click + drag motion!
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:gap-5 items-center">
        <SaturnLavenderComp
          pathname={saturnPurple}
          className="w-full h-60 sm:h-180"
        />
        <SaturnLavenderComp
          pathname={saturnRed}
          className="w-full h-60 sm:h-180"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-5 mx-2 justify-center my-2">
        <video className="w-auto h-80 sm:h-100" controls>
          <source src="/Media/Videos/IMG_7260.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video className="w-auto h-80 sm:h-100" controls>
          <source src="/Media/Videos/IMG_7266.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col justify-center items-center sm:items-stretch sm:flex-row my-4 gap-5">
        <Image
          src={imageItems[0].src}
          alt={imageItems[0].altText}
          width={479}
          height={286}
        />
        <Image
          src={imageItems[1].src}
          alt={imageItems[1].altText}
          width={479}
          height={286}
        />
        <Image
          src={imageItems[2].src}
          alt={imageItems[2].altText}
          width={479}
          height={286}
        />
      </div>
      <div className="my-20 sm:my-50"></div>
    </div>
  );
}
