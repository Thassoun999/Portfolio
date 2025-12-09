"use client";
import { useEffect, useState } from "react";
import NavButton from "./NavButton";

export default function Navbar() {
  const [isStuck, setIsStuck] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("nav-trigger");

    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the trigger is not intersecting, navbar is fixed
        setIsStuck(!entry.isIntersecting);
      },
      { threshold: 0.1 } // lower = smoother
    );
    if (trigger) {
      observer.observe(trigger);
    }
    return () => observer.disconnect();
  }, []);

  const Image1 = [
    "/Media/Assets/words1_new_unhover_transparent.gif",
    "/Media/Assets/words1_new_hover_transparent.gif",
  ];
  const Image2 = [
    "/Media/Assets/words2_new_unhover_transparent.gif",
    "/Media/Assets/words2_new_hover_transparent.gif",
  ];
  const Image3 = [
    "/Media/Assets/words3_new_unhover_transparent.gif",
    "/Media/Assets/words3_new_hover_transparent.gif",
  ];

  return (
    <>
      <div id="nav-trigger" className="h-px" />
      <div className={`sticky top-0 w-full z-50`}>
        <nav
          className={`relative mt-2 transition-all duration-300 ${
            isStuck ? "backdrop-blur-lg" : "backdrop-blur-0"
          } `}
        >
          <div
            className={`flex justify-center transition-all duration-300 ${
              isStuck ? "scale-95" : "scale-100"
            }`}
          >
            <NavButton
              hrefLink="/about"
              pathnameUnhover={Image1[0]}
              pathnameHover={Image1[1]}
              className="mt-0.5 sm:mt-1 aspect-7/2 sm:aspect-6/1"
            />
            <NavButton
              hrefLink="/contact"
              pathnameUnhover={Image2[0]}
              pathnameHover={Image2[1]}
              className="aspect-7/2 sm:aspect-6/1"
            />
            <NavButton
              hrefLink="/work"
              pathnameUnhover={Image3[0]}
              pathnameHover={Image3[1]}
              className="aspect-7/2 sm:aspect-6/1"
            />
          </div>
        </nav>
      </div>
    </>
  );
}
