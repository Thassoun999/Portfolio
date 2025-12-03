import Link from "next/link";

export default function Models() {
  return (
    <div className="my-5 mx-10 sm:mx-20">
      <ul className="space-y-4 text-4xl md:text-6xl xl:text-7xl">
        <li className="text-white hover:text-red-400">
          <Link href={"./models/saturn-lav"}>1. Saturn Lavender</Link>
        </li>
      </ul>
    </div>
  );
}
