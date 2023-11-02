import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";


const getData = async (id) => {
  const res = await fetch(
    `${process.env.FETCH_URL}/api/races/${id}`,
    { cache: "no-store" }
  );

  if (res.ok) {
    const data = await res.json();
    return data
  }


  
};





export async function generateMetadata({ params }) {
  const race = await getData(params.id);
  return {
    title: race.title,
    description: race.desc,
  };
}

const ClasicsIdPage = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div className="w-full max-w-[1024px]  mx-auto my-0 mt-16 lg:mx-12   ">
      <div className="flex  gap-10 justify-center align-middle lg:flex-col mb-6 lg:items-center">
        <div className=" flex-1">
          <Image src={data.img} width={680} height={600} className="rounded" alt="pic" />
        </div>

        <div className="flex-1 lg:max-w-[740px]">
          <h1 className="text-green-500 text-2xl tracking-wide uppercase font-bold mb-4 lg:text-center md:text-xl">
            {" "}
            {data.title}{" "}
          </h1>
          <p className=" tracking-wide  "> {data.content} </p>
        </div>
      </div>
      <p className=" tracking-wide max-w-[1024px]   lg:max-w-[740px] lg:mx-auto lg:my-0 md:text-sm">
        {data.content}{" "}
      </p>
    </div>
  );
};

export default ClasicsIdPage;
