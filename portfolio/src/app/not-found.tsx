import Image from "next/image";

export default function NotFound() {
  return (
    <div className="text-white mx-20 my-10 flex flex-row">
      <Image
        src={"/Media/Assets/object_ship.gif"}
        width={126}
        height={165}
        unoptimized
        alt={"Ship Object"}
        className=""
      />
      <div className="mt-6">
        <h2 className="text-3xl">Page Not Found</h2>
        <p className="text-xl">Could not find requested resource</p>
      </div>
    </div>
  );
}
