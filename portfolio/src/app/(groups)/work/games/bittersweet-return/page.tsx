import Image from "next/image";

export default function BittersweetReturn() {
  return (
    <div className="my-5 mx-10 sm:mx-20 flex flex-col sm:flex-row justify-between gap-5 items-start">
      <div className="space-y-2 sm:space-y-4 text-white w-full sm:w-1/2 mb-2">
        <Image
          src={"/Media/Assets/BSLogo.gif"}
          width={74}
          height={75}
          unoptimized
          alt={"BS Object"}
          className=""
        />
        <h1 className="text-4xl md:text-6xl xl:text-7xl hover:text-red-400">
          Bittersweet Return
        </h1>

        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Description</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          Bittersweet return is a solo semester long design project done for a
          grad level game design course at NYU. You play as Aila, a young girl
          who finds herself back home visiting for the holidays. The game is
          playable within the web browser by clicking the widget below!
        </p>
        <br />
        <div className="flex justify-center">
          <iframe
            src="https://itch.io/embed/1703443"
            width="552"
            height="167"
            className="border-3 border-purple-400"
          >
            <a href="https://thassoun999.itch.io/bittersweet-return">
              Bittersweet Return by Tae
            </a>
          </iframe>
        </div>
      </div>
      <div
        className="w-full sm:w-1/2 sm:max-h-[800px] sm:overflow-y-auto overflow-x-hidden sm:mt-20 sm:bg-transparent 
        rounded-sm sm:hover:bg-gray-400/10 duration-150 transition-colors ease-in"
      >
        <div>
          <Image
            src={"/Media/Portfolio/BSR/BittersweetMoon.png"}
            alt="Game Logo"
            width={1280}
            height={640}
            className="w-full mb-4"
          />
        </div>
        <div className="columns-2 gap-4">
          <Image
            src={"/Media/Portfolio/BSR/kzbMce.png"}
            alt="Icon"
            width={347}
            height={343}
            className="w-full mb-4"
          />
          <Image
            src={"/Media/Portfolio/BSR/Capture1.png"}
            alt="Screen1"
            width={1019}
            height={754}
            className="w-full mb-4"
          />
          <Image
            src={"/Media/Portfolio/BSR/Capture4.png"}
            alt="Screen2"
            width={1018}
            height={745}
            className="w-full mb-4"
          />
          <Image
            src={"/Media/Portfolio/BSR/Capture6.png"}
            alt="Screen3"
            width={1021}
            height={761}
            className="w-full mb-4"
          />
        </div>
      </div>
    </div>
  );
}
