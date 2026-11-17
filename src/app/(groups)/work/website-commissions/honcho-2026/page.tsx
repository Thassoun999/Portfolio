import Image from "next/image";
import Link from "next/link";

export default function Honcho() {
  const imageItems = {
    homesite: {
      access: {
        src: "/Media/Portfolio/Honcho/access.png",
        altText: "Honcho Website Accessibility Page",
        width: 1410,
        height: 851,
      },
      ticket: {
        src: "/Media/Portfolio/Honcho/ticket.png",
        altText: "Honcho Website Ticket Page",
        width: 1426,
        height: 856,
      },
      program: {
        src: "/Media/Portfolio/Honcho/program.png",
        altText: "Honcho Website Program Page",
        width: 1381,
        height: 843,
      },
      home: {
        src: "/Media/Portfolio/Honcho/homePage.png",
        altText: "Honcho Website Home Page",
        width: 1416,
        height: 881,
      },
    },
    screen: {
      cap1: {
        src: "/Media/Portfolio/Honcho/cap1.PNG",
        altText: "Honcho Interactive Map - Blender Capture 1",
        width: 1973,
        height: 1097,
      },
      cap2: {
        src: "/Media/Portfolio/Honcho/cap2.PNG",
        altText: "Honcho Interactive Map - Blender Capture 2",
        width: 1037,
        height: 827,
      },
      cap3: {
        src: "/Media/Portfolio/Honcho/cap3.PNG",
        altText: "Honcho Interactive Map - Blender Capture 3",
        width: 1546,
        height: 975,
      },
      cap4: {
        src: "/Media/Portfolio/Honcho/cap4.PNG",
        altText: "Honcho Interactive Map - Blender Capture 4",
        width: 926,
        height: 849,
      },
    },
    render: {
      r1: {
        src: "/Media/Portfolio/Honcho/render1.JPG",
        altText: "Honcho Interactive Map - Blender Render 1",
        width: 2048,
        height: 1122,
      },
      r2: {
        src: "/Media/Portfolio/Honcho/render2.png",
        altText: "Honcho Interactive Map - Blender Render 2",
        width: 1920,
        height: 1080,
      },
      r3: {
        src: "/Media/Portfolio/Honcho/render3.png",
        altText: "Honcho Interactive Map - Blender Render 3",
        width: 1920,
        height: 1080,
      },
      r4: {
        src: "/Media/Portfolio/Honcho/render4.JPG",
        altText: "Honcho Interactive Map - Blender Render 4",
        width: 2048,
        height: 1266,
      },
    },
    map: {
      desktop: {
        src: "/Media/Portfolio/Honcho/desktopcap.png",
        altText: "Honcho Interactive Map - Desktop View",
        width: 1438,
        height: 844,
      },
      mobile: {
        src: "/Media/Portfolio/Honcho/mobilecap.png",
        altText: "Honcho Interactive Map - Mobile View",
        width: 1438,
        height: 844,
      },
    },
  };

  return (
    <div className="my-5 mx-10 sm:mx-20 flex flex-col justify-between gap-5 items-start">
      <div>
        <Image
          src={"/Media/Assets/object_saturn.gif"}
          unoptimized
          alt={"Saturn Object"}
          className="mb-4"
          width={97}
          height={64}
        />
        <div className="space-y-2 sm:space-y-4 text-white w-full mb-2">
          <Link href={"https://www.honchocampout.com/"}>
            <h1 className="text-4xl md:text-6xl xl:text-7xl hover:text-red-400">
              Honcho Campout 2026
            </h1>
          </Link>
          <br />
          <h2 className="text-3xl md:text-5xl xl:text-6xl">Description</h2>
          <p className="text-2xl md:text-4xl xl:text-5xl">
            Honcho Campout is an expansive queer festival rooted in deep
            connection with land, people, and art. Located in the Four Quarters
            Sanctuary, this annual summertime camping festival is a gathering
            point for artists, educators, performers, dancers, and musicians to
            get together and create an eccentric patchwork of sounds and ideas.
          </p>
          <br />
          <h2 className="text-3xl md:text-5xl xl:text-6xl">Website</h2>
          <p className="text-2xl md:text-4xl xl:text-5xl">
            Designed and developed the entire 2026 iteration of Honcho Campout
            2026. The site was built on Webflow's infrastructure with additional
            features such as the interative program scheduling page and the
            interactive 3D map made independently by Backwards Sunrise on React,
            Blender, and Three.JS frameworks.
          </p>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            The site integration uses a Zapier + Airtable backend and features
            accessibility tools alternative views, navigations, and coloring.
            Additional third-party support for Shopify and Tixr provided by
            Webflow's internal library.
          </p>
          <br />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center sm:items-stretch w-full my-4 gap-5">
          <Image
            src={imageItems.homesite.home.src}
            alt={imageItems.homesite.home.altText}
            width={imageItems.homesite.home.width}
            height={imageItems.homesite.home.height}
          />
          <Image
            src={imageItems.homesite.access.src}
            alt={imageItems.homesite.access.altText}
            width={imageItems.homesite.access.width}
            height={imageItems.homesite.access.height}
          />
          <Image
            src={imageItems.homesite.ticket.src}
            alt={imageItems.homesite.ticket.altText}
            width={imageItems.homesite.ticket.width}
            height={imageItems.homesite.ticket.height}
          />
          <Image
            src={imageItems.homesite.program.src}
            alt={imageItems.homesite.program.altText}
            width={imageItems.homesite.program.width}
            height={imageItems.homesite.program.height}
          />
        </div>
        <div className="space-y-2 sm:space-y-4 text-white w-full mb-2">
          <br />
          <h2 className="text-3xl md:text-5xl xl:text-6xl">Interactive Map</h2>
          <p className="text-2xl md:text-4xl xl:text-5xl">
            <Link
              href={"../models/honcho-map"}
              className="underline hover:text-red-400"
            >
              Click here
            </Link>{" "}
            to experience the Honcho 2026 3D Interactive Map.
          </p>
          <br />
          <p className="text-2xl md:text-4xl xl:text-5xl">
            My primary responsibility in the development of the Honcho Campout
            2026 website was to also work on a 3D map of the Interfaith Four
            Quarters Sanctuary campgrounds as they would appear during the
            festival. This work involved collecting reference resources,
            investigating satellite topography, and planning out a
            milestone-based roadmap for creating the campground in Blender.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center sm:items-start w-full my-4 gap-5">
            <Image
              src={imageItems.screen.cap1.src}
              alt={imageItems.screen.cap1.altText}
              width={imageItems.screen.cap1.width}
              height={imageItems.screen.cap1.height}
            />
            <Image
              src={imageItems.screen.cap2.src}
              alt={imageItems.screen.cap2.altText}
              width={imageItems.screen.cap2.width}
              height={imageItems.screen.cap2.height}
            />
          </div>
          <p className="text-2xl md:text-4xl xl:text-5xl">
            I then proceeded to model, texture, paint, and set all the different
            3D assets (with the exception of a few listed on the interactive
            map) within the landscaped environment in Blender.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center sm:items-start w-full my-4 gap-5">
            <Image
              src={imageItems.screen.cap3.src}
              alt={imageItems.screen.cap3.altText}
              width={imageItems.screen.cap3.width}
              height={imageItems.screen.cap3.height}
            />
            <Image
              src={imageItems.screen.cap4.src}
              alt={imageItems.screen.cap4.altText}
              width={imageItems.screen.cap4.width}
              height={imageItems.screen.cap4.height}
            />
          </div>
          <p className="text-2xl md:text-4xl xl:text-5xl">
            After bake and export, the interactive portion of the map was
            created in a Three.JS container with additional support from the
            Drei library. Below are some offline renders of the map
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center sm:items-start w-full my-4 gap-5">
            <Image
              src={imageItems.render.r1.src}
              alt={imageItems.render.r1.altText}
              width={imageItems.render.r1.width}
              height={imageItems.render.r1.height}
            />
            <Image
              src={imageItems.render.r2.src}
              alt={imageItems.render.r2.altText}
              width={imageItems.render.r2.width}
              height={imageItems.render.r2.height}
            />
            <Image
              src={imageItems.render.r3.src}
              alt={imageItems.render.r3.altText}
              width={imageItems.render.r3.width}
              height={imageItems.render.r3.height}
            />
            <Image
              src={imageItems.render.r4.src}
              alt={imageItems.render.r4.altText}
              width={imageItems.render.r4.width}
              height={imageItems.render.r4.height}
            />
          </div>

          <p className="text-2xl md:text-4xl xl:text-5xl">
            And under here is a realtime render + interactive view that can be
            seen on the map page itself.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center sm:items-start w-full my-4 gap-5">
            <Image
              src={imageItems.map.desktop.src}
              alt={imageItems.map.desktop.altText}
              width={imageItems.map.desktop.width}
              height={imageItems.map.desktop.height}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
