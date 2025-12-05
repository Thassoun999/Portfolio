import Link from "next/link";

export default function Games() {
  return (
    <div className="my-5 mx-10 sm:mx-20">
      <ul className="space-y-4 text-4xl md:text-6xl xl:text-7xl">
        <li className="text-white hover:text-red-400">
          <Link href={"./games/wandering-ice-breaker"}>
            1. Wandering ice Break (2021)
          </Link>
        </li>
      </ul>
    </div>
  );
}
