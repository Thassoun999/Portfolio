import Image from "next/image";

export default function Manichaied() {
  return (
    <div className="my-5 mx-10 sm:mx-20 flex flex-col sm:flex-row justify-between gap-5 items-start">
      <div className="space-y-2 sm:space-y-4 text-white w-full sm:w-1/2 mb-2">
        <Image
          src={"/Media/Assets/MLogo.gif"}
          width={88}
          height={85}
          unoptimized
          alt={"MNL Object"}
          className=""
        />
        <h1 className="text-4xl md:text-6xl xl:text-7xl hover:text-red-400">
          Manichaied
        </h1>

        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Description</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          A game made by Team Eredally for the 2021 Global Game Jam (Duality).
          You play as Zai, a lost forest spirit who finds his home threatened by
          a sudden imbalance. A tear in space has caused the world of the
          spirits and the world of monsters to merge, threatening the very
          fabric of reality in the form of a tear in space. The game can be
          downloaded by clicking the link below!
        </p>
        <br />
        <div className="flex justify-center">
          <iframe
            width="552"
            height="167"
            src="https://itch.io/embed/1401995"
            className="border-amber-500 border-3"
          >
            <a href="https://thassoun999.itch.io/manichaeid">
              Manichaeid (Prototype Version 1.0) by Tae, N4t Summers
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
            src={"/Media/Portfolio/MAN/diamond.png"}
            alt="Game Logo"
            width={2490}
            height={2490}
            className="w-full mb-4"
          />
          <Image
            src={"/Media/Portfolio/MAN/Screen0.png"}
            alt="Screen1"
            width={1267}
            height={908}
            className="w-full mb-4"
          />
          <Image
            src={"/Media/Portfolio/MAN/Screen2.png"}
            alt="Screen2"
            width={1672}
            height={944}
            className="w-full mb-4"
          />
          <Image
            src={"/Media/Portfolio/MAN/Screen3.png"}
            alt="Screen3"
            width={1175}
            height={739}
            className="w-full mb-4"
          />
          <Image
            src={"/Media/Portfolio/MAN/Screen5.png"}
            alt="Screen4"
            width={489}
            height={482}
            className="w-full mb-4"
          />
        </div>
      </div>
    </div>
  );
}
