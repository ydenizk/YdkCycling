import React from "react";
import Image from "next/image";
import items from "../data.js";
import Link from "next/link";
import Pic1 from "./../../public/pic-1.jpeg";
import Pic2 from "./../../public/pic-2.jpeg";
import Pic3 from "./../../public/pic-3.jpg";



export const metadata = {
  title: "Grand Tours",
  description: "Cycling Road races of Season",
  keywords: "web design, javascript,react, nextjs,tailwind,css",
};





export default function Tours() {
  return (
    <main className="flex flex-col justify-center items-center gap-16  mb-12 ">
      <div className="max-w-5xl max-h-[600px] mb-4 mx-2  ">
        <h1 className="  uppercase  text-4xl  font-bold mb-4 tracking-wide text-yellow-300 lg:text-center lg:text-3xl sm:text-2xl">
          Tour De France
        </h1>

        <div className="relative  ">
          <div className=" absolute rounded-full w-20 h-20 bg-yellow-300 z-50 right-10 bottom-4 opacity-70 sm:-bottom-8  "></div>
          <p className=" z-10 absolute bottom-20 left-16 max-w-xl tracking-wide text-lg lg:text-base lg:bottom-10 lg:left-6 sm:text-sm ">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quis, laboriosam."
          </p>
          <Link
            href="/tours/tour"
            className="absolute top-8 right-8 z-10   rounded-2xl bg-yellow-300 p-3 px-4  text-black font-semibold hover:bg-yellow-400 transition"
          >
            Go to Tour
          </Link>
          <Image
            src={Pic3}
            width={929}
            height={540}
            alt="tour pic"
            className="max-w-5xl max-h-[600px]  z-0 top-0 left-0 saturate-50 
            rounded-full rounded-t lg:rounded-full lg:w-[640px] sm:w-[480px]"
          />
        </div>
      </div>

      <div className="max-w-5xl max-h-[600px] my-4  ">
        <h1 className="  uppercase  text-4xl  font-bold mb-4 tracking-wide text-pink-300 lg:text-center lg:text-3xl sm:text-2xl">
          giro d'italia
        </h1>

        <div className="relative">
          <div className=" absolute rounded-full w-20 h-20 bg-pink-300 z-50 right-10 bottom-4 opacity-70 sm:-bottom-8   "></div>
          <p className=" z-10 absolute bottom-20 left-16 max-w-xl tracking-wide text-lg lg:text-base lg:bottom-10 lg:left-6 sm:text-sm">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quis, laboriosam."
          </p>
          <Link
            href="tours/giro"
            className="absolute top-8 right-8 z-10   rounded-2xl bg-pink-300 p-3 px-4  text-black font-semibold hover:bg-pink-400 transition"
          >
            Go to GIRO
          </Link>
          <Image
            src={Pic1}
            width={929}
            height={540}
            className="max-w-5xl max-h-[600px]  z-0 top-0 left-0 rounded-full rounded-t saturate-50 
            lg:rounded-full lg:w-[640px] sm:w-[480px]"
          />
        </div>
      </div>
      <div className="max-w-5xl max-h-[600px]  my-4  ">
        <h1 className=" uppercase text-4xl  font-bold mb-4 tracking-wide text-red-500 lg:text-center lg:text-3xl sm:text-2xl">
          la vuelta a españa
        </h1>

        <div className="relative">
          <div className=" absolute rounded-full w-20 h-20 bg-red-500 z-50 right-10 bottom-4 opacity-70 sm:-bottom-8  "></div>
          <p className=" z-10 absolute bottom-20 left-16 max-w-xl tracking-wide text-lg lg:text-base lg:bottom-10 lg:left-6 sm:text-sm">
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quis, laboriosam."
          </p>
          <Link
            href="/tours/vuelta"
            className="absolute top-8 right-8 z-10   rounded-2xl bg-red-500 hover:bg-red-600  p-3 px-4  text-black
             font-semibold hover:bg-re-600 transition"
          >
            Go to VUELTA
          </Link>
          <Image
            src={Pic2}
            width={929}
            height={540}
            className="max-w-5xl max-h-[600px]  z-0 top-0 left-0  rounded-full rounded-t saturate-50 
            lg:rounded-full lg:w-[640px] sm:w-[480px]"
          />
        </div>
      </div>
    </main>
  );
}

const kartal={ali:["oya","veli"],ayse:["nevin"]}
console.log(kartal.ali[0])