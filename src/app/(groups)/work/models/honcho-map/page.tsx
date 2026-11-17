import Link from "next/link";

export default function HonchoMap() {
  return (
    <div className="my-5 mx-10 sm:mx-20">
      <div className="space-y-2 sm:space-y-4 text-white w-full mt-5 sm:mt-10">
        <h1 className="text-4xl md:text-6xl xl:text-7xl ">
          Honcho Campout 2026 Interactive Map
        </h1>
        <h2 className="text-3xl md:text-5xl xl:text-6xl hover:text-red-400">
          <Link href={"../website-commissions/honcho-2026"}>
            Click here for info
          </Link>
        </h2>

        <br />
      </div>
      <iframe
        src="https://thassoun999.github.io/HonchoMap/"
        width="100%"
        height="100%"
        style={{
          border: "none",
          display: "block",
          width: "100%",
          height: "80vh",
        }}
        title="Honcho Interactive Map"
        allowFullScreen
      ></iframe>
    </div>
  );
}
