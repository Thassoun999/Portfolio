"use client";
import Image from "next/image";
import { useState } from "react";

export type HomeButtonProps = {
  pathnameUnhover: string;
  pathnameHover: string;
  // className: string; --use TWMerge if HomeButton has custom button
};

export default function HomeButton({
  pathnameUnhover,
  pathnameHover,
}: HomeButtonProps) {
  const [hover, setHover] = useState(false);

  return (
    <div
      key={`Image-${hover}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className="relative aspect-6/1"
    >
      <Image
        src={pathnameUnhover}
        alt="HomeButtonImage"
        fill
        unoptimized
        className={`object-contain transition-opacity duration-150 ${
          hover ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        src={pathnameHover}
        alt="HomeButtonImage"
        fill
        unoptimized
        className={`object-contain transition-opacity duration-150 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
