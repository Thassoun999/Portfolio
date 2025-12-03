import SaturnLavenderComp from "@/components/3DC/SaturnLavenderComp";

export default function SaturnLavender() {
  const saturnRed = "/Media/3DModels/Saturn_Red.glb";
  const saturnPurple = "/Media/3DModels/Saturn_Purple.glb";

  return (
    <div className="my-5 mx-10 sm:mx-20 flex flex-col sm:flex-row justify-between sm:gap-5 items-center">
      <SaturnLavenderComp pathname={saturnPurple} className="w-full h-120" />
      <SaturnLavenderComp pathname={saturnRed} className="w-full h-120" />
    </div>
  );
}
