import Image from "next/image";

export default function About() {
  return (
    <div className="my-5 mx-10 sm:mx-20 w-1/3">
      <Image
        width={3839}
        height={4492}
        alt="Tae (Sydra) Hassoun Bio Photo"
        src={"/Media/About/BioPhoto_1.jpg"}
      />
    </div>
  );
}
