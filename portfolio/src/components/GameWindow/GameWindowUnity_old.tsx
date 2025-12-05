"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";
import { twMerge } from "tailwind-merge";

export type GameWindowsUnityOldProps = {
  configUrl: string;
  gameLoader: string;
  className?: string;
};

export default function GameWindowUnityOld({
  configUrl,
  gameLoader,
  className,
}: GameWindowsUnityOldProps) {
  const [fullscreen, setFullscreen] = useState(false);

  // Initialize Unity
  useEffect(() => {
    const initUnity = () => {
      if (typeof window !== "undefined" && (window as any).UnityLoader) {
        (window as any).UnityLoader.instantiate("unity-container", configUrl);
      }
    };

    window.addEventListener("unity-loader-ready", initUnity);
    return () => window.removeEventListener("unity-loader-ready", initUnity);
  }, [configUrl]);

  // Handle fullscreen toggle
  const handleFullscreen = () => {
    setFullscreen(!fullscreen);
  };

  return (
    <div
      className={
        fullscreen
          ? "fixed h-full w-full m-0 bg-gray-900 opacity-95 z-89 top-0 left-0"
          : ""
      }
    >
      <div
        className={twMerge(
          fullscreen
            ? "fixed w-50 sm:w-80 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-90"
            : `relative ${className}`,
          "mx-auto object-contain border-2 rounded-sm"
        )}
      >
        {/* Unity loader script */}
        <Script
          src={gameLoader}
          strategy="afterInteractive"
          onLoad={() => window.dispatchEvent(new Event("unity-loader-ready"))}
        />

        {/* Unity container */}
        <div
          id="unity-container"
          className="relative w-full aspect-3/5 bg-black overflow-hidden object-contain"
        />
        {/* Fullscreen button */}
        <div
          className="absolute bottom-2 right-2 h-10 w-20/100 sm:w-12/100 bg-purple-500 hover:bg-purple-600 opacity-70 border-2 rounded-4xl cursor-pointer text-center flex items-center justify-center"
          onClick={handleFullscreen}
        >
          <b className="pt-0.5">⛶</b>
        </div>
      </div>
    </div>
  );
}
