import Image from "next/image";
import { SpinningText } from "@/components/SpinningText";

export default function Home() {
  const filePathLogoGif = "/Media/BackSun1_2025_Transparent.gif";
  const spinningText = "ABOUT • PROJECTS • CONTACT ME • ";
  return (
    <div>
      <main className="overflow-hidden">
        <div className="grid place-items-center h-screen relative">
          <Image
            src={filePathLogoGif}
            alt="Logo Gif"
            width={400}
            height={400}
            className="absolute ml-10"
            unoptimized
          />
          <div id="circleContainer">
            <SpinningText fontSize={6} duration={200}>
              {spinningText}
            </SpinningText>
          </div>
        </div>
      </main>
    </div>
  );
}
