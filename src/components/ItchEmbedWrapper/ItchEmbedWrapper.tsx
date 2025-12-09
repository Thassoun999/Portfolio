"use client";

import dynamic from "next/dynamic";

const ItchEmbedInn = dynamic(() => import("./ItchEmbedInn"), {
  ssr: false,
});

export default function ItchEmbedWrapper() {
  return <ItchEmbedInn />;
}
