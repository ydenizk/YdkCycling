

import Image from "next/image";
import Link from "next/link";
import Banner from "./../public/banner.jpg"
import Button from "./components/button/button"

export default function Home() {
  return (
    <main className="w-full flex  items-center  justify-center   ">
      <div className="w-full max-w-[1024px]  my-16 p-4 grid grid-cols-2  gap-16 justify-center ">
        <div className="mt-24">
          <Image
            src={Banner}
            width={540}
            height={420}
            className="rounded-2xl"
          />
          <Link href="/races">
           <Button />
          </Link>
         
        </div>
        <div>
          <h1 className="text-6xl capitalize leading-normal text-right   font-semibold bg-gradient-to-r from-black via-yellow-50  to-yellow-300 inline-block text-transparent bg-clip-text">
            Cycling road races of Season
          </h1>
          <p className="tracking-wide mt-8 text-lg ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga,
            nostrum consequuntur. Maxime at impedit molestiae facere dicta
            architecto maiores optio nihil! Dolorem culpa quidem voluptatibus.
          </p>
        </div>
      </div>
    </main>
  );
}
