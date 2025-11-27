"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export type HomeButtonProps = {
  pathnameUnhover: string;
  pathnameHover: string;
  hrefLink: string;
  className?: string;
  // className: string; --use TWMerge if HomeButton has custom button
};

// TODO: SEE HERE
// MEOW: https://www.reddit.com/r/nextjs/comments/15aj1t0/undesirable_image_flickering_in_nextjs/

export default function HomeButton({
  pathnameUnhover,
  pathnameHover,
  hrefLink,
  className = "",
}: HomeButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={hrefLink}
      key={`Image-${hover}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className={twMerge(className, "relative")}
    >
      <Image
        src={pathnameUnhover}
        alt="HomeButtonImage"
        fill
        unoptimized
        className={`object-contain transition-opacity duration-50 ${
          hover ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={pathnameHover}
        alt="HomeButtonImage"
        fill
        unoptimized
        className={`object-contain transition-opacity duration-50 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />
    </Link>
  );
}

// object-contain automatically centers the object!
