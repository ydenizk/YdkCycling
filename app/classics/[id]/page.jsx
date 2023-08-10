import Image from "next/image";
import React from "react";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/races/${id}`);

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}

const ClasicsIdPage = async ({ params })=> {
  const data =await getData(params.id);

  return (
    <div className="w-full max-w-[1024px]  mx-auto my-0 mt-16 lg:mx-12   ">
      <div className="flex  gap-10 justify-center align-middle lg:flex-col mb-6 lg:items-center">
        <div className=" flex-1">
          <Image src={data.img} width={680} height={600} className="rounded" />
        </div>

        <div className="flex-1 lg:max-w-[740px]">
          <h1 className="text-green-500 text-2xl tracking-wide uppercase font-bold mb-4 lg:text-center">
            {" "}
            {data.title}{" "}
          </h1>
          <p className=" tracking-wide  "> {data.content} </p>
        </div>
      </div>
      <p className=" tracking-wide max-w-[1024px]   lg:max-w-[740px] lg:mx-auto lg:my-0">
        {data.content}{" "}
      </p>
    </div>
  );
}

export default ClasicsIdPage;
