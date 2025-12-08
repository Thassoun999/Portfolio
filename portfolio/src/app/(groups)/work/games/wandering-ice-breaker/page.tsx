import Image from "next/image";

// TODO: For the future, ensure that the aspect ratio can be modified, everything else can stay

export default function WanderingIceBreaker() {
  /*
  For newer unity versions
  const dataUrl =
    "/Executables/WanderingIceBreaker/Build/Downloads.data.unityweb";
  const frameWorkUrl =
    "/Executables/WanderingIceBreaker/Build/Downloads.wasm.framework.unityweb";
  const codeUrl =
    "/Executables/WanderingIceBreaker/Build/Downloads.wasm.code.unityweb";
*/
  return (
    <div className="my-5 mx-10 sm:mx-20 flex flex-col sm:flex-row justify-between gap-5 items-start">
      <div className="space-y-2 sm:space-y-4 text-white w-full sm:w-1/2 mb-2">
        <Image
          src={"/Media/Assets/WIBLogo.gif"}
          width={111}
          height={81}
          unoptimized
          alt={"WIB Object"}
          className=""
        />
        <h1 className="text-4xl md:text-6xl xl:text-7xl hover:text-red-400">
          Wandering Ice Breaker
        </h1>

        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Description</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          Wandering Ice Breaker is semester long design project done for a grad
          level game development course at NYU. You play as a fox traversing an
          icy landscape in order to make it back home! The game is playable
          within the web browser by clicking on the widget below!
        </p>
        <br />
        <div className="flex justify-center">
          <iframe
            width="552"
            height="167"
            src="https://itch.io/embed/636385"
            className="border-3 border-blue-300"
          >
            <a href="https://thassoun999.itch.io/wandering-ice-breaker">
              Wandering Ice Breaker by Tae
            </a>
          </iframe>
        </div>
      </div>
      <div
        className="w-full sm:w-1/2 sm:max-h-[800px] sm:overflow-y-auto overflow-x-hidden sm:mt-20 sm:bg-transparent 
      rounded-sm sm:hover:bg-gray-400/10 duration-150 transition-colors ease-in"
      >
        <div className="columns-2 gap-4">
          <Image
            src={"/Media/Portfolio/WIB/FoxTime.png"}
            alt="Game Logo"
            width={384}
            height={384}
            className="w-full mb-4"
          />
          <Image
            src={"/Media/Portfolio/WIB/Screenshot1.png"}
            alt="Screenshot 1"
            width={356}
            height={591}
            className="w-full mb-4"
          />

          <Image
            src={"/Media/Portfolio/WIB/PurpleFoxSpirit.png"}
            alt="Purple Fox Spirit Sprite Sheet"
            width={360}
            height={480}
            className="w-full mb-4"
          />
          <Image
            src={"/Media/Portfolio/WIB/Screenshot2.png"}
            alt="Screenshot 2"
            width={356}
            height={591}
            className="w-full mb-4"
          />
          <Image
            src={"/Media/Portfolio/WIB/WhiteFoxSpirit_SpriteSheet.png"}
            alt="White Fox Spirit Sprite Sheet"
            width={360}
            height={480}
            className="w-full mb-4"
          />
        </div>
      </div>
    </div>
  );
}
