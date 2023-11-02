import React from "react";
import Link from "next/link";
import Image from "next/image";


export const metadata = {
  title: "Classics",
  description: "Cycling Road races of Season",
  keywords: "web design, javascript,react, nextjs,tailwind,css",
};




const getData = async () => {
  const res = await fetch(`${process.env.FETCH_URL}/api/races`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("data fetching failed...");
  }

  return res.json();
};

const Classics = async () => {
  const data = await getData();

  return (
    <div className="flex flex-col justify-center pt-20   items-center content-center gap-6 mx-auto my-0 w-full max-w-screen-lg ">
      {data.map((dt) => {
        const { _id, title, desc, img } = dt;

        return (
          <div key={_id} className="max-w-[1024px] flex justify-center items-center m-4  px-3 py-6 border border-[#333] bg-[#333] rounded ">
            <div className="  flex-1  h-full text-start p-2 self-start">
              <h1 className="text-3xl font-semibold text-white mb-6 tracking-wide 
      
              ">
               
                {title}
              </h1>
              <p className="capitalize tracking-wide  text-left mb-8">{desc} </p>

              <Link href={`/classics/${_id}`} className=" text-lg tracking-wide  rounded p-3 px-6 bg-green-500 text-white  "> Go </Link>
            </div>

            <div className="flex-1 max-w-[500px] max-h-[500px]  h-full">
              <Image src={img} alt="resim" width={500} height={500} className="rounded" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Classics;
