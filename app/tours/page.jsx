import React from "react";
import Image from "next/image";
import items from "../data.js";
import Link from "next/link";
import Pic1 from "./../../public/pic-1.jpeg";
import Pic2 from "./../../public/pic-2.jpeg";

export default function Tours() {
  return (
    <main className="flex flex-col justify-center items-center gap-24  mb-12 ">
      <div className="max-w-5xl max-h-[600px] mb-4   ">
        <h1 className="  uppercase  text-4xl  font-bold mb-4 tracking-wide text-yellow-300">
          Tour De France
        </h1>

        <div className="relative">
          <div className=" absolute rounded-full w-20 h-20 bg-yellow-300 z-50 right-10 bottom-4 opacity-50 "></div>
          <p className=" z-10 absolute bottom-20 left-8 max-w-xl tracking-wide text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quis, laboriosam.
          </p>
          <Link
            href="/tours/giro"
            className="absolute top-8 right-8 z-10   rounded-2xl bg-yellow-300 p-3 px-4  text-black font-semibold hover:bg-yellow-400 transition"
          >
            Go to Tour
          </Link>
          <Image
            src={Pic2}
            width={929}
            height={540}
            className="max-w-5xl max-h-[600px]  z-0 top-0 left-0 rounded saturate-50"
          />
        </div>
      </div>

      <div className="max-w-5xl max-h-[600px] my-4  ">
        <h1 className="  uppercase  text-4xl  font-bold mb-4 tracking-wide text-pink-300">
          giro d'italia
        </h1>

        <div className="relative">
          <div className=" absolute rounded-full w-20 h-20 bg-pink-300 z-50 right-10 bottom-4 opacity-50  "></div>
          <p className=" z-10 absolute bottom-20 left-8 max-w-xl tracking-wide text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quis, laboriosam.
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
            className="max-w-5xl max-h-[600px]  z-0 top-0 left-0 rounded saturate-50"
          />
        </div>
      </div>
      <div className="max-w-5xl max-h-[600px]  my-4  ">
        <h1 className=" uppercase text-4xl  font-bold mb-4 tracking-wide text-red-500 ">
          la vuelta a españa
        </h1>

        <div className="relative">
          <div className=" absolute rounded-full w-20 h-20 bg-red-500 z-50 right-10 bottom-4 opacity-50  "></div>
          <p className=" z-10 absolute bottom-20 left-8 max-w-xl tracking-wide text-lg">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis,
            laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Quis, laboriosam.
          </p>
          <Link
            href="/tours/vuelta"
            className="absolute top-8 right-8 z-10   rounded-2xl bg-red-500 p-3 px-4  text-black font-semibold hover:bg-re-600 transition"
          >
            Go to VUELTA
          </Link>
          <Image
            src={Pic1}
            width={929}
            height={540}
            className="max-w-5xl max-h-[600px]  z-0 top-0 left-0 rounded saturate-50"
          />
        </div>
      </div>
    </main>
  );
}


