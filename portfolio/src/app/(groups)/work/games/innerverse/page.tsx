import ARComp from "@/components/3DC/ARComp";
import ItchEmbedWrapper from "@/components/ItchEmbedWrapper/ItchEmbedWrapper";
import Image from "next/image";

// TODO: Do the itchembed wrapper for the other pages on your website
export default function Innerverse() {
  const green = "/Media/3DModels/greenMush.glb";
  const pink = "/Media/3DModels/pinkMush.glb";

  /*
      const mini1 = "/Media/3DModels/miniMushBlue.glb";
  const mini3 = "/Media/3DModels/miniMushBlue.glb";
  */
  const mini2 = "/Media/3DModels/miniMushBlue.glb";

  return (
    <div className="my-5 mx-10 sm:mx-20">
      <div className="flex flex-col sm:flex-row justify-between gap-5 items-start">
        <div className="space-y-2 sm:space-y-4 text-white w-full sm:w-1/2 mb-2">
          <Image
            src={"/Media/Assets/InnLogo.gif"}
            width={102}
            height={114}
            unoptimized
            alt={"MNL Object"}
            className=""
          />
          <h1 className="text-4xl md:text-6xl xl:text-7xl hover:text-red-400">
            Innerverse
          </h1>

          <br />
          <h2 className="text-3xl md:text-5xl xl:text-6xl">Description</h2>
          <p className="text-2xl md:text-4xl xl:text-5xl">
            A game made by Team Fungi for the 2022 Global Game Jam (Roots). This
            is an experimental single play turn-based strategy game where you
            play as a mycelial colony taking your land back from the destructive
            clutches of human society. The game can be downloaded by clicking
            the link below!
          </p>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            Additionally there are 3D models that can be interacted with below
            using a click and drag motion!
          </p>
          <br />
          <div className="flex justify-center">
            <ItchEmbedWrapper />
          </div>
        </div>
        <div
          className="w-full sm:w-1/2 sm:max-h-[800px] sm:overflow-y-auto overflow-x-hidden sm:mt-20 sm:bg-transparent 
            rounded-sm sm:hover:bg-gray-400/10 duration-150 transition-colors ease-in"
        >
          <div>
            <Image
              src={"/Media/Portfolio/INN/background-overlay.png"}
              alt="Game Logo"
              width={960}
              height={540}
              className="w-full mb-4"
            />
          </div>
          <div className="columns-2 gap-4">
            <Image
              src={"/Media/Portfolio/INN/Inn1.png"}
              alt="Screen1"
              width={2560}
              height={1440}
              className="w-full mb-4"
            />
            <Image
              src={"/Media/Portfolio/INN/Inn2.png"}
              alt="Screen2"
              width={2560}
              height={1440}
              className="w-full mb-4"
            />
            <Image
              src={"/Media/Portfolio/INN/Inn3.png"}
              alt="Screen3"
              width={2560}
              height={1440}
              className="w-full mb-4"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:gap-5 items-center">
        <ARComp
          camPos={[0.2, 0.1, 0.2]}
          pathname={green}
          key="GreenMush"
          className="w-full h-60 sm:h-180"
        />
        <ARComp
          camPos={[0.2, 0.1, 0.2]}
          pathname={mini2}
          key="mini2"
          scale={[1.5, 1.5, 1.5]}
          className="w-full h-60 sm:h-180"
        />
        <ARComp
          camPos={[0.2, 0.1, 0.2]}
          pathname={pink}
          key="PinkMush"
          className="w-full h-60 sm:h-180"
        />
      </div>
    </div>
  );
}
