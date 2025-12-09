import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export default function Contact() {
  return (
    <div>
      <div className="flex flex-col-reverse sm:flex-row my-4 mx-15 sm:mx-35 justify-between bg-black/55 rounded-md">
        <div className="mx-2 my-5 flex flex-col w-full sm:w-1/2 gap-20">
          <div className="flex justify-start items-center">
            <Image
              src={"/Media/Assets/object_ship.gif"}
              width={126}
              height={165}
              unoptimized
              alt={"Ship Object"}
              className="w-[126px] h-[165px] ml-2 sm:mt-5 sm:ml-5"
            />
          </div>

          <div className="flex justify-center items-center">
            <p className=" text-white text-2xl xl:text-3xl">
              Commission Me!
              <br />
            </p>
          </div>

          <div className="flex justify-end items-center">
            <Image
              src={"/Media/Assets/object_letter.gif"}
              width={188}
              height={92}
              unoptimized
              alt={"Ship Object"}
              className="w-[188px] h-[92px] mr-8 mb-2 sm:mr-0 sm:mb-0"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5 sm:my-5 mx-2 gap-0 w-full sm:w-1/2 items-start">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
