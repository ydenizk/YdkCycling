import React from "react";
import { items } from "../../data.js";
import { notFound } from "next/navigation";

/* const getData = (cat) => {
  const data = persons[cat];

  if (data) {
    return data;
  }

  return notFound();
};
 */

export  function generateStaticParams() {
  return items.map((p) => ({
    name: p.name,
  }));
}

const Name = ({ params: { name } }) => {
  const item = items.find((p) => p.name === name);
/*   if (!item) {
    notFound();
  } */
  return (
    <div>
      {item.details.map((n) => {
        return (
          <div>
            <h1> {n.title} </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Name;
