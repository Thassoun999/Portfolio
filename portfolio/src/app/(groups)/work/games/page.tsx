import Link from "next/link";

export default function Games() {
  return (
    <div className="my-5 mx-10 sm:mx-20">
      <ul className="space-y-4 text-4xl md:text-6xl xl:text-7xl">
        <li className="text-white hover:text-red-400">
          1. Pomegranates (2026 - WIP)
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./games/innerverse"}>2. Innerverse (2022)</Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./games/manichaied"}>3. Manichaied (2021)</Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./games/wandering-ice-breaker"}>
            4. Wandering Ice Breaker (2020)
          </Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./games/bittersweet-return"}>
            5. Bittersweet Return (2019)
          </Link>
        </li>
      </ul>
    </div>
  );
}
