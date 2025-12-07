import Link from "next/link";

export default function WebsiteCommissions() {
  return (
    <div className="my-5 mx-10 sm:mx-20">
      <ul className="space-y-4 text-4xl md:text-6xl xl:text-7xl">
        <li className="text-white hover:text-red-400">
          <Link href={"./website-commissions/uncle-nats"}>1. Uncle Nat's</Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./website-commissions/ladg"}>
            2. The Los Angeles Design Group
          </Link>
        </li>
        <li className="text-white hover:text-red-400">
          <Link href={"./website-commissions/ltp"}>3. LTP </Link>
        </li>
      </ul>
    </div>
  );
}
