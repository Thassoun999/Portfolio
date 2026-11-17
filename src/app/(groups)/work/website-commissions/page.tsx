import Link from "next/link";

export default function WebsiteCommissions() {
  return (
    <div className="my-5 mx-10 sm:mx-20">
      <ul className="space-y-4 text-4xl md:text-6xl xl:text-7xl">
        <li className="text-white hover:text-red-400">
          <Link href={"./website-commissions/honcho-2026"}>
            {"1. Honcho Campout 2026"}
          </Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./website-commissions/tamara"}>
            {"2. Tamara Santibañez Portfolio"}
          </Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./website-commissions/agnyc"}>
            {"3. Abolitionist Guide to NYC"}
          </Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./website-commissions/ms-tea"}>
            {"4. Ms. Tea Botanica"}
          </Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./website-commissions/uncle-nats"}>
            {"5. Uncle Nat's"}
          </Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./website-commissions/ladg"}>
            6. The Los Angeles Design Group
          </Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./website-commissions/ltp"}>7. LTP </Link>
        </li>
      </ul>
    </div>
  );
}
