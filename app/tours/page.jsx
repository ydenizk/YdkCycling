import React from "react";
import Image from "next/image";
import items from "../data.js";
import Link from "next/link";


export const metadata = {
  title: "Grand Tours",
  description: "Cycling Road races of Season",
  keywords: "web design, javascript,react, nextjs,tailwind,css",
}; 

export default function Tours() {
  return (
    <main className="flex flex-col justify-center items-center gap-16  mb-12 ">
      {items.map((item) => {
        const { id, mainTitle, descript, img, name,color } = item;

        return (
          <div className="max-w-5xl max-h-[600px]  my-4  " key={id}>
            <h1 className=" uppercase text-4xl  font-bold mb-4 tracking-wide lg:text-center lg:text-3xl sm:text-2xl"
             style={{color:`${color}`}}>
              {mainTitle}
            </h1>

            <div className="relative">
              <div className=" absolute rounded-full w-20 h-20  z-50 right-10 bottom-4 opacity-70 sm:-bottom-8  " 
              style={{background:`${color}`}}></div>
              <p className=" z-10 absolute bottom-20 left-16 max-w-xl tracking-wide text-lg lg:text-base lg:bottom-10 lg:left-6 sm:text-sm">
                {descript}
              </p>
              <Link
                href={`/tours/${name}`}
                className="absolute top-8 right-8 z-10   rounded-2xl   p-3 px-4  text-black
             font-semibold hover:bg-re-600 transition"
             style={{background:`${color}` }}
              >
                Go to {name}
              </Link>
              <Image
                src={img}
                width={929}
                height={540}
                className="max-w-5xl max-h-[600px]  z-0 top-0 left-0  rounded-full rounded-t saturate-50 
            lg:rounded-full lg:w-[640px] sm:w-[480px]"
              />
            </div>
          </div>
        );
      })}
    </main>
  );
}
