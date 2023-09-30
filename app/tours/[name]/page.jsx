import React from "react";
import items from "@/app/data";
import { notFound } from "next/navigation";
import Image from "next/image";

export const generateStaticParams = async () => {
  const pp = items.map((item) => ({ id: item.name.toString() }));
  return pp;
};

function NamePage({ params }) {
  const id = params.name;
  const singleTour = items.find((item) => item.name.toString() === id);
  if (!singleTour) {
    notFound();
  }
  return (
    <div className="w-full max-w-[1024px]  mx-auto  mt-12 mb-8">
      <h1 className=" w-full text-center  uppercase tracking-wide text-3xl mb-8" 
         style={{color:`${singleTour.color}`}}
      >  {singleTour.mainTitle} </h1>
      <div className="flex justify-center items-center gap-4 lg:flex-col lg:max-w-[540px] lg:mx-auto">
        {singleTour.details.map((single) => {
          const { id, title, desc, image } = single;
          return <div key={id} className="border-2 border-gray-700">
            
            <Image src={image} width={540} height={360} alt="" className="object-contain" />
             <h1 className="p-2   mt-4 capitalize tracking-wide text-slate-200 font-semibold "> {title} </h1>
             <p className="p-2 tracking-wide text-slate-200 font-extralight text-sm mb-4"> {desc} </p>

          </div>;
        })}
      </div>
    </div>
  );
}

export default NamePage;
