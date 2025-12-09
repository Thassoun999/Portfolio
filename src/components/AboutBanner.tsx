"use client";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

export type AboutBannerProps = {
  className?: string;
};

export default function AboutBanner({ className = "" }: AboutBannerProps) {
  const [hover, setHover] = useState(false);

  // 355 x 261
  return (
    <div
      key={`AboutBanner-${hover}`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      className={twMerge(className, "relative")}
    >
      <Image
        alt="About Unhover"
        width={355}
        height={261}
        unoptimized
        src={"/Media/About/Sydra_Unhover.gif"}
        className={`absolute inset-0 object-contain transition-opacity duration-50 ${
          hover ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        alt="About Hover"
        width={355}
        height={261}
        unoptimized
        src={"/Media/About/Sydra_new_Hover.gif"}
        className={`absolute inset-0 object-contain transition-opacity duration-50 ${
          hover ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
