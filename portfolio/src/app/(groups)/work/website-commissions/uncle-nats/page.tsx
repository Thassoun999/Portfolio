import Image from "next/image";
import Link from "next/link";

export default function UncleNats() {
  return (
    <div className="my-5 mx-10 sm:mx-20 flex flex-col sm:flex-row justify-between gap-5 items-start">
      <div className="space-y-2 sm:space-y-4 text-white w-full sm:w-1/2 mb-2">
        <Image
          src={"/Media/Assets/object_diamond.gif"}
          width={123}
          height={110}
          unoptimized
          alt={"Diamond Object"}
          className=""
        />
        <Link href={"https://www.unclenats.com/"}>
          <h1 className="text-4xl md:text-6xl xl:text-7xl hover:text-red-400">
            Uncle Nat's
          </h1>
        </Link>
        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">Description</h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          Uncle Nat's is a hair removal and facial lounge located in Flatbush,
          the Little Caribbean neighborhood in Brooklyn.
        </p>
        <br />
        <h2 className="text-3xl md:text-5xl xl:text-6xl">
          Interactive Hero Banner
        </h2>
        <p className="text-2xl md:text-4xl xl:text-5xl">
          This interactive hero banner utilizes WebGL rendering and imaging
          flowmaps to create an interactive taffy-like logo. When clicked the
          logo goes semi-transparent revealing the team behind Uncle Nat's.
        </p>
      </div>
      <video className="w-full sm:w-1/2 sm:pt-30" controls>
        <source src="/Media/Videos/Uncle_Nats_Preview.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

// flex justify end for another imageg
