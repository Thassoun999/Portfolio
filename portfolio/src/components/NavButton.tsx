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

export default function NavButtonProps({
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
      className="relative w-full aspect-3/1"
    >
      <Image
        src={pathnameUnhover}
        alt="NavButtonImage"
        fill
        unoptimized
        className={twMerge(
          className,
          `object-contain items-center transition-opacity duration-150 ${
            hover ? "opacity-0" : "opacity-100"
          }`
        )}
      />

      <Image
        src={pathnameHover}
        alt="NavButtonImage"
        fill
        unoptimized
        className={twMerge(
          className,
          `object-contain items-center transition-opacity duration-150 ${
            hover ? "opacity-100" : "opacity-0"
          }`
        )}
      />
    </Link>
  );
}
