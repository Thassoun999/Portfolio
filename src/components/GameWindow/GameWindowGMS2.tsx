/*
"use client";

import { useRef, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export type GameWindowGMS2Props = {
  className?: string;
  resolution: { width: number; height: number };
  src: string; // Path to the HTML5 game's index.html
};

export default function GameWindowGMS2({
  className,
  resolution,
  src,
}: GameWindowGMS2Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Optional: cleanup or message handling
  useEffect(() => {
    return () => {
      // Stop the iframe by resetting src (releases audio/context)
      if (iframeRef.current) {
        iframeRef.current.src = "about:blank";
      }
    };
  }, []);

  return (
    <div className={twMerge(className, "relative bg-black")}>
      <iframe
        ref={iframeRef}
        src={src}
        width={resolution.width}
        height={resolution.height}
        style={{ border: "0", display: "block" }}
        allow="autoplay; fullscreen"
      />
    </div>
  );
}
*/
