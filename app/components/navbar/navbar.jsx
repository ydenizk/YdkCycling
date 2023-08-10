import React from "react";
import Link from "next/link";
//import { UserButton, auth } from "@clerk/nextjs";

const menu = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Tours",
    url: "/tours",
  },
  {
    id: 1,
    title: "Classics",
    url: "/classics",
  },
  {
    id: 1,
    title: "Contact",
    url: "/contact",
  },
];

function Navbar() {
  //const { userId } = auth();

  return (
    <nav
      className="w-full h-20 bg-zinc-900 px-4 py-2 flex items-center  
    justify-center shadow "
    >
      <div className="w-full max-w-[1024px] h-full flex items-center  justify-between px-4 ">
        <div className="tracking-wide uppercase text-2xl font-semibold font-serif bg-gray-800 text-yellow-100 rounded-full">
      <Link href="/"><span className="text-yellow-700">YDK</span> Cycling</Link>
        </div>

        <ul className="flex justify-center items-center ">
          {menu.map((m) => {
            const { id, title, url } = m;

            return (
              <li key={id} className="mx-2">
                <Link href={url} className="tracking-wide hover:text-slate-200 transition ">
                  {title}
                </Link>
              </li>
            );
          })}

          {/* <div className="flex justify-center items-center">
            <li className="ml-8 ">
              <Link
                href="/sign-in"
                className="border border-slate-400 text-sm p-2  rounded-2xl bg-slate-700  hover:bg-slate-800 transition"
              >
                Sign in
              </Link>
            </li>
            <li className="ml-4">
              <Link
                href="/sign-up"
                className="border p-2  text-sm border-slate-400  rounded-2xl bg-slate-700  hover:bg-slate-800 transition"
              >
                Sign up
              </Link>
            </li> */}
            {/*  {!userId && (
              <>
                <li className="ml-8 ">
                  <Link
                    href="/sign-in"
                    className="border border-slate-400 text-sm p-2  rounded-2xl bg-slate-700  hover:bg-slate-800 transition"
                  >
                    Sign in
                  </Link>
                </li>
                <li className="ml-4">
                  <Link
                    href="/sign-up"
                    className="border p-2  text-sm border-slate-400  rounded-2xl bg-slate-700  hover:bg-slate-800 transition"
                  >
                    Sign up
                  </Link>
                </li>
              </>
            )} */}
            {/*       <li className="ml-6">
              <UserButton afterSignOutUrl="/" />
            </li> */}
        {/*  <div> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
