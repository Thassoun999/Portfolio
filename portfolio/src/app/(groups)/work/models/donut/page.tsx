import Image from "next/image";

export default function Donut() {
  const imageItems = [
    {
      src: "/Media/Portfolio/Donut/Donut_1.png",
      altText: "Donut 1",
    },
    {
      src: "/Media/Portfolio/Donut/Donut_4.png",
      altText: "Donut 2",
    },
    {
      src: "/Media/Portfolio/Donut/Donut_7.png",
      altText: "Donut 3",
    },
    {
      src: "/Media/Portfolio/Donut/Donut_11.png",
      altText: "Donut 4",
    },
  ];

  return (
    <div className="my-5 mx-10 sm:mx-20">
      <div>
        <div className="space-y-2 sm:space-y-4 text-white w-full mt-5 sm:mt-10">
          <h1 className="text-4xl md:text-6xl xl:text-7xl ">Blender Donut</h1>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            The following is my first 3D model and animation of the classic
            Blender Donut. The following makes use of the basics of modeling,
            lighting, shading, node programming, animation framing, and material
            manipulation.
          </p>
          <br />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-5 mx-2 justify-center my-2">
        <video className="w-auto h-100 sm:h-200" controls>
          <source
            src="/Media/Videos/Donut_1_Final_Anim0001-0300.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex flex-col max-w-8xl justify-center items-center sm:items-stretch sm:flex-row flex-wrap my-4 gap-5">
        <Image
          src={imageItems[0].src}
          alt={imageItems[0].altText}
          width={514}
          height={274}
        />
        <Image
          src={imageItems[1].src}
          alt={imageItems[1].altText}
          width={640}
          height={344}
        />
        <Image
          src={imageItems[2].src}
          alt={imageItems[2].altText}
          width={640}
          height={344}
        />
        <Image
          src={imageItems[3].src}
          alt={imageItems[3].altText}
          width={640}
          height={344}
        />
      </div>
    </div>
  );
}
