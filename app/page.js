

import Image from "next/image";
import Link from "next/link";
import Banner from "./../public/banner.jpg"
import Button from "./components/button/button"


export const metadata = {
  title: "YDK Cycling",
  description: "Cycling Road races of Season",
  keywords: "web design, javascript,react, nextjs,tailwind,css",
};



export default function Home() {
  return (
    <main className="w-full flex  items-center  justify-center  ">
      <div
        className="w-full max-w-[1024px]  my-16 flex  gap-16 justify-center  mx-2
      md:gap-8  md:flex-col-reverse md:text-center md:items-center md:my-12"
      >
        <div className="mt-24 flex-1 md:mt-0 ">
          <Image
            src={Banner}
            width={540}
            height={420}
            alt="banner"
            className="rounded-2xl"
          />
          <Link href="/tours" className="md:w-full ">
            <Button />
          </Link>
        </div>
        <div className="flex-1">
          <h1
            className="text-6xl capitalize leading-normal text-right
           font-semibold bg-gradient-to-r from-black via-yellow-50  to-yellow-300 
           inline-block text-transparent bg-clip-text md:text-4xl sm:text-3xl"
          >
            Cycling road races of Season
          </h1>
          <p className="tracking-wide mt-8 text-lg text-slate-200 md:text-sm md:tracking-normal md:mx-12 sm:text-xs  ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            nostrum consequuntur. Maxime at impedit molestiae facere dicta
            architecto maiores optio nihil! Dolorem culpa quidem voluptatibus.
          </p>
        </div>
      </div>
    </main>
  );
}
