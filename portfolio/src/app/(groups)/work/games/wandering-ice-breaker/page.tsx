import GameWindowUnityOld from "@/components/GameWindow/GameWindowUnity_old";

export default function WanderingIceBreaker() {
  const gameLoader = "/Executables/WanderingIceBreaker/Build/UnityLoader.js";
  const configUrl = "/Executables/WanderingIceBreaker/Build/Downloads.json";

  /*
  For newer unity versions
  const dataUrl =
    "/Executables/WanderingIceBreaker/Build/Downloads.data.unityweb";
  const frameWorkUrl =
    "/Executables/WanderingIceBreaker/Build/Downloads.wasm.framework.unityweb";
  const codeUrl =
    "/Executables/WanderingIceBreaker/Build/Downloads.wasm.code.unityweb";
*/
  return (
    <div className="my-5 mx-10 sm:mx-20">
      <GameWindowUnityOld
        gameLoader={gameLoader}
        configUrl={configUrl}
        className="w-50 h-auto sm:w-80 aspect-3/5"
      />
    </div>
  );
}
