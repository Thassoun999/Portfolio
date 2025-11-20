import NavButton from "@/components/NavButton";
export default function GroupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Image1 = [
    "/Media/words1_new_unhover_transparent.gif",
    "/Media/words1_new_hover_transparent.gif",
  ];
  const Image2 = [
    "/Media/words2_new_unhover_transparent.gif",
    "/Media/Words2_new_hover_transparent.gif",
  ];
  const Image3 = [
    "/Media/words3_new_unhover_transparent.gif",
    "/Media/words3_new_hover_transparent.gif",
  ];
  return (
    <>
      <div className="flex flex-row justify-center mt-2 mx-auto w-6/7 border border-t-white">
        <NavButton
          hrefLink="about"
          pathnameUnhover={Image1[0]}
          pathnameHover={Image1[1]}
          className="mt-2"
        />
        <NavButton
          hrefLink="/contact"
          pathnameUnhover={Image2[0]}
          pathnameHover={Image2[1]}
        />
        <NavButton
          hrefLink="/work"
          pathnameUnhover={Image3[0]}
          pathnameHover={Image3[1]}
        />
      </div>
      {children}
    </>
  );
}
