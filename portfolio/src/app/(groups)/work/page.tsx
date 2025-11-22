import HomeButton from "@/components/HomeButton";

export default function Work() {
  const Image1 = [
    "/Media/WebsiteWork_unhover_transparent.gif",
    "/Media/WebsiteWork_hover_transparent.gif",
  ];

  const Image2 = [
    "/Media/GameWork_unhover_transparent.gif",
    "/Media/GameWork_hover_transparent.gif",
  ];

  const Image3 = [
    "/Media/3DWork_Unhover_transparent.gif",
    "/Media/3DWork_hover_transparent.gif",
  ];

  return (
    <div className="flex justify-center flex-col sm:flex-row sm:flex-wrap relative w-full gap-1 mt-5">
      <HomeButton
        hrefLink="/work/website-commissions"
        pathnameUnhover={Image1[0]}
        pathnameHover={Image1[1]}
        className="w-full sm:w-1/3 aspect-3/2"
      />
      <HomeButton
        hrefLink="/work/models"
        pathnameUnhover={Image3[0]}
        pathnameHover={Image3[1]}
        className="w-full sm:w-1/3 aspect-3/2"
      />
      <HomeButton
        hrefLink="/work/games"
        pathnameUnhover={Image2[0]}
        pathnameHover={Image2[1]}
        className="w-full sm:w-1/3 aspect-3/2"
      />
    </div>
  );
}
