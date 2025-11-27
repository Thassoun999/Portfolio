"use client";

import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

export type NavButtonProps = {
  pathnameUnhover: string;
  pathnameHover: string;
  hrefLink: string;
  className?: string;
};

export default function NavButton({
  pathnameHover,
  pathnameUnhover,
  hrefLink,
  className = "",
}: NavButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={hrefLink}
      key={`Image-${hover}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className={twMerge(className, "relative w-full")}
    >
      <Image
        src={pathnameUnhover}
        alt="NavButtonImage"
        fill
        unoptimized
        className={`object-contain transition-opacity duration-50 ${
          hover ? "opacity-0" : "opacity-100"
        }`}
      />

      <Image
        src={pathnameHover}
        alt="NavButtonImage"
        fill
        unoptimized
        className={`object-contain transition-opacity duration-50 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />
    </Link>
  );
}
