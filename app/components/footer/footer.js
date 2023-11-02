import React from "react";
import Link from "next/link";
import { ImTwitter, ImFacebook } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";



export default function Footer() {
  return (
    <footer className="w-full flex  items-center  justify-center ">
      <div className="w-full max-w-[1024px]  my-8 p-4 grid grid-cols-2  gap-16 justify-center ">
        <div className="text-slate-300">
          <p className="whitespace-nowrap text-xs">
            We&quotd love to hear from you, just email us at
            <span className="text-base text-green-700">ydkurt@yahoo.com</span>
          </p>
          <h1 className="text-xs">&copy;All rights reserved by YdenizK.</h1>
        </div>

        <div className="text-right w-full flex justify-end ">
          <Link href="https://twitter.com/home" className="ml-2">
            <ImTwitter className="text-blue-400 text-lg  " />
          </Link>
          <Link href="https://www.facebook.com" className="ml-2">
            <ImFacebook className="text-blue-700 text-lg " />
          </Link>
          <Link href="https://instagram.com/" className="ml-2">
            <FaInstagramSquare className="text-pink-800 text-lg " />
          </Link>
        </div>
      </div>
    </footer>
  );
}
