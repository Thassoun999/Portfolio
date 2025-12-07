"use client";

import { useEffect, useRef, useState } from "react";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const unityInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let didInit = false;

    const initUnity = () => {
      if (didInit) return; // Prevent multiple inits
      didInit = true;

      if (typeof window !== "undefined" && (window as any).UnityLoader) {
        unityInstanceRef.current = (window as any).UnityLoader.instantiate(
          containerRef.current,
          configUrl
        );
      }
    };

    // Check if script is already on the page
    let script = document.querySelector<HTMLScriptElement>(
      `script[src="${gameLoader}"]`
    );
    let createdScript = false;

    if (!script) {
      script = document.createElement("script");
      script.src = gameLoader;
      script.async = true;
      document.body.appendChild(script);
      createdScript = true;
    }

    if ((window as any).UnityLoader) {
      initUnity();
    } else if (createdScript && script) {
      script.addEventListener("load", initUnity);
    }

    return () => {
      // Remove listener
      if (script && createdScript) {
        script.removeEventListener("load", initUnity);
      }

      // Clean container
      if (containerRef.current) {
        while (containerRef.current.firstChild) {
          containerRef.current.removeChild(containerRef.current.firstChild);
        }
      }

      // Quit instance
      if (unityInstanceRef.current) {
        try {
          unityInstanceRef.current.Quit && unityInstanceRef.current.Quit();
        } catch {}
        unityInstanceRef.current = null;
      }

      // Remove script if we created it
      if (script && createdScript && script.parentElement) {
        script.parentElement.removeChild(script);
      }

      // Delete global loader
      if ((window as any).UnityLoader) {
        try {
          delete (window as any).UnityLoader;
        } catch {}
      }
    };
  }, [configUrl, gameLoader]);

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
        {/* Unity container */}
        <div
          id="unity-container"
          ref={containerRef}
          className="relative w-full aspect-3/5 bg-black overflow-hidden object-contain"
        />
        {/* Fullscreen button */}
        <div
          className="absolute bottom-2 left-2 h-10 w-20/100 sm:w-12/100 bg-purple-500 hover:bg-purple-600 opacity-70 border-2 rounded-4xl cursor-pointer text-center flex items-center justify-center"
          onClick={handleFullscreen}
        >
          <b className="pt-0.5">⛶</b>
        </div>
      </div>
    </div>
  );
}
