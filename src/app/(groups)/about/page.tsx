import BioPhoto from "@/components/3DC/BioPhoto";
import AboutBanner from "@/components/AboutBanner";

export default function About() {
  return (
    <div className="mx-10 sm:mx-20">
      <div className="flex flex-col sm:flex-row-reverse justify-between sm:gap-5 items-start mb-15">
        <div className="w-full sm:w-2/5 aspect-square mt-5">
          <BioPhoto key="bioImg" />
        </div>
        <div className="w-full sm:w-3/5 sm:pl-10 text-white sm:mt-2 ">
          <AboutBanner className="w-[177.5px] h-[130.5px] sm:w-[236.6px] sm:h-[174px]" />

          <p className="text-2xl 2xl:text-3xl pl-4 w-full space-y-2 sm:space-y-4">
            Sydra (Tae) Hassoun is a Trans Lebanese-Palestinian
            Multidisciplinary Artist and Creative Programmer based in NYC. She
            has always strived to make interactive canvases that place heavy
            emphasis on play and wonder. This can be found through her games,
            her multi-dimesional art, and even her website work. Backwards
            Sunrise is both a continuation of this practice and a call to
            radical action. Her current direction is to the roots of her people,
            the empowerment of her community, and creative liberation. The goal
            on the horizon is a transformation of the interconnected web, one
            that can foster empathy and revolution.
            <br />
            <br />
            Sydra has over 6 years of professional experience and is currently
            freelancing in Website Development, 3D Modeling / Animation, Game
            Development, and Graphic Design. She places heavy emphasis on
            choosing clientel that align with her values. To work with Backwards
            Sunrise, please submit a form through the Contact page. No AI
            Requests.
          </p>
        </div>
      </div>
    </div>
  );
}
