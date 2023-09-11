import React from "react";
import Link from "next/link";


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
  return (
    <nav
      className="w-full h-20 bg-zinc-900 px-4 py-2 flex items-center  
    justify-center shadow md:py-4"
    >
      <div className="w-full max-w-[1024px] h-full flex items-center  justify-between px-4 md:flex-col ">
        <div className="tracking-wide uppercase text-2xl font-semibold font-serif  text-yellow-100  ">
          <Link href="/">
            <span className="text-yellow-700">YDK</span> Cycling
          </Link>
        </div>

        <ul className="flex justify-center items-center ">
          {menu.map((m) => {
            const { id, title, url } = m;

            return (
              <li key={id} className="mx-2 md:mx-4 ">
                <Link
                  href={url}
                  className="tracking-wide hover:text-slate-300 transition md:text-sm "
                >
                  {title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
