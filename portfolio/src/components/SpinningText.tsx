"use client";
import { cn } from "@/lib/utils";
import { motion, Transition, Variants } from "motion/react";
import React, { CSSProperties, useEffect, useState } from "react";

//TODO: SPIN CONTAINER AND NOT LETTERS

export type SpinningTextProps = {
  children: string;
  style?: CSSProperties;
  duration?: number;
  className?: string;
  reverse?: boolean;
  fontSize?: number;
  radius?: number;
  transition?: Transition;
  variants?: {
    container?: Variants;
    item?: Variants;
  };
};

const BASE_TRANSITION = {
  repeat: Infinity,
  ease: "linear",
};

const BASE_ITEM_VARIANTS = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
  },
};

export function SpinningText({
  children,
  duration = 10,
  style,
  className,
  reverse = false,
  fontSize = 1,
  radius = 5,
  transition,
  variants,
}: SpinningTextProps) {
  const [fontLoaded, setFontLoaded] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(() => setFontLoaded(true));
  }, []);
  if (!fontLoaded) return null; // or a fallback

  let grouping = 0;
  let buffer = false;
  const letters = children.split("");
  const lettersGroupings = letters.map((letter) => {
    if (letter == " " || letter == "•") {
      if (buffer == false && letter == "•") {
        grouping += 1;
        buffer = true;
      }
      return {
        letter,
        grouping: -1,
      };
    }

    buffer = false;
    return {
      letter,
      grouping,
    };
  });

  // Increase this if you have items
  const [group0, setGroup0] = useState(false);
  const [group1, setGroup1] = useState(false);
  const [group2, setGroup2] = useState(false);

  const totalLetters = letters.length;

  const finalTransition = {
    ...BASE_TRANSITION,
    ...transition,
    duration: (transition as { duration?: number })?.duration ?? duration,
  };

  const containerVariants = {
    visible: { rotate: reverse ? -360 : 360 },
    ...variants?.container,
  };

  const itemVariants = {
    ...BASE_ITEM_VARIANTS,
    ...variants?.item,
  };

  return (
    <motion.div
      className={cn("relative", className)}
      style={{
        ...style,
      }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={finalTransition as Transition}
    >
      {lettersGroupings.map((letterItem, index) => {
        const groupingNumber = letterItem.grouping;
        let groupingState;

        if (groupingNumber == 0) {
          groupingState = group0;
        }
        if (groupingNumber == 1) {
          groupingState = group1;
        }
        if (groupingNumber == 2) {
          groupingState = group2;
        }
        return (
          <motion.span
            onHoverStart={() => {
              if (groupingNumber == 0) {
                setGroup0(true);
              }
              if (groupingNumber == 1) {
                setGroup1(true);
              }
              if (groupingNumber == 2) {
                setGroup2(true);
              }
            }}
            onHoverEnd={() => {
              if (groupingNumber == 0) {
                setGroup0(false);
              }
              if (groupingNumber == 1) {
                setGroup1(false);
              }
              if (groupingNumber == 2) {
                setGroup2(false);
              }
            }}
            aria-hidden="true"
            key={`${index}-${letterItem.letter}-${groupingState}`}
            variants={itemVariants}
            className="absolute left-1/2 top-1/2 inline-block cursor-pointer"
            style={
              {
                "--index": index,
                "--total": totalLetters,
                "--font-size": fontSize,
                "--radius": radius,
                color: groupingState ? "#c61a09" : "#ffffff",
                fontSize: `calc(var(--font-size, 2) * 1rem)`,
                transform: `
                  translate(-50%, -50%)
                  rotate(calc(360deg / var(--total) * var(--index)))
                  translateY(calc(var(--radius, 5) * -1ch))
                `,
                transformOrigin: "center",
              } as React.CSSProperties
            }
          >
            {letterItem.letter}
          </motion.span>
        );
      })}
      <span className="sr-only">{children}</span>
    </motion.div>
  );
}
