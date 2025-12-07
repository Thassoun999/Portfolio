import ARComp from "@/components/3DC/ARComp";
import Link from "next/link";
import Image from "next/image";

export default function VRCapstone() {
  const crane = "/Media/3DModels/Crane3.glb";

  const imageItems = [
    {
      src: "/Media/Portfolio/VRCapstone/4Capture.PNG",
      altText: "Construction Site 1",
    },
    {
      src: "/Media/Portfolio/VRCapstone/6Capture.PNG",
      altText: "Construction Site 2",
    },
    {
      src: "/Media/Portfolio/VRCapstone/10Capture.PNG",
      altText: "Construction Site 3",
    },
  ];

  return (
    <div className="my-5 mx-10 sm:mx-20">
      <div>
        <div className="space-y-2 sm:space-y-4 text-white w-full mt-5 sm:mt-10">
          <h1 className="text-4xl md:text-6xl xl:text-7xl ">
            Construction Site Tour (VR)
          </h1>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            This independent Virtual Reality project for the NYU Unity AR/VR
            Certificate showcases a construction site tour with active
            animations, interactable / grabbable objects, sound design,
            lighting, post-processing work, original 3D models, imported assets,
            and many more VR experiences.
            <br />
            <br />
            VR Application is Unity and Oculus Quest 2 Compatible.
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
            The crane below is one of the models showcased. <br />
            It can be rotated with a click + drag motion!
          </p>
        </div>
      </div>{" "}
      <div className="flex flex-col sm:flex-row justify-between sm:gap-5 items-center">
        <ARComp
          camPos={[-7, 2, -7]}
          pathname={crane}
          key="crane"
          className="w-full h-60 sm:h-180"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-5 mx-2 justify-center space-y-2 sm:space-y-4 text-white">
        <div>
          <p className="text-2xl md:text-4xl xl:text-5xl">
            Full VR Demo Showcase
          </p>
          <video className="w-auto h-80 sm:h-120" controls>
            <source src="/Media/Videos/VRDemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <p className="text-2xl md:text-4xl xl:text-5xl">
            Animation Demo Of Different Models
          </p>
          <video className="w-auto h-80 sm:h-100" controls>
            <source src="/Media/Videos/AnimationDemo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center sm:items-stretch sm:flex-row my-4 gap-5">
        <Image
          src={imageItems[0].src}
          alt={imageItems[0].altText}
          width={479}
          height={286}
        />
        <Image
          src={imageItems[1].src}
          alt={imageItems[1].altText}
          width={479}
          height={286}
        />
        <Image
          src={imageItems[2].src}
          alt={imageItems[2].altText}
          width={479}
          height={286}
        />
      </div>
      <div className="my-20 sm:my-50"></div>
    </div>
  );
}
