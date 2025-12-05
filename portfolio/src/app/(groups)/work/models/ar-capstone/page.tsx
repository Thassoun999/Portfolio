import ARComp from "@/components/3DC/ARComp";
import Link from "next/link";

export default function ARCapstone() {
  const redPlane = "/Media/3DModels/Plane_1.glb";
  const blackPlane = "/Media/3DModels/Plane_2.glb";

  return (
    <div className="my-5 mx-10 sm:mx-20">
      <div>
        <div className="space-y-2 sm:space-y-4 text-white w-full mt-5 sm:mt-10">
          <h1 className="text-4xl md:text-6xl xl:text-7xl ">
            Industrial Aircraft Showcase (AR)
          </h1>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            This independent Augmented Reality (AR - mobile devices) project for
            the NYU Unity AR/VR Certificate showcases an aircraft industrial
            showcase with ProBuilds / PolyBrush / ProGrids built models,
            animations, lighting, post-processing work, use of plane detection,
            use of occlusion, and many more that contribute to AR experience.
            <br />
            <br />
            AR application only compatible on Android devices. Can be partially
            demoed on Unity.
            <br />
          </p>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            Link:{" "}
            <Link
              className="hover:text-red-400"
              href={
                "https://github.com/Thassoun999/Unity-Class-Certificate-Work"
              }
            >
              Github
            </Link>
          </p>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            The two planes below are some of the models showcased.
            <br />
            They can be rotated with a click + drag motion!
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between sm:gap-5 items-center">
        <ARComp
          camPos={[-3, 2, -2]}
          pathname={redPlane}
          className="w-full h-60 sm:h-180"
        />
        <ARComp
          camPos={[-3, 2, -3]}
          pathname={blackPlane}
          className="w-full h-60 sm:h-180"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-5 mx-2 justify-center space-y-2 sm:space-y-4 text-white">
        <div>
          <p className="text-2xl md:text-4xl xl:text-5xl">Full Demo Showcase</p>
          <video className="w-auto h-80 sm:h-120" controls>
            <source src="/Media/Videos/Demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <p className="text-2xl md:text-4xl xl:text-5xl">
            Pinch Zoom Showcase for Mobile
          </p>
          <video className="w-auto h-80 sm:h-100" controls>
            <source src="/Media/Videos/Feature.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="my-20 sm:my-50"></div>
    </div>
  );
}
