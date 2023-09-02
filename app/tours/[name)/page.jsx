import { notFound } from "next/navigation";
import React from "react";
import persons from "./dat.js";

const getData = (n) => {
  const data = persons.n;

  if (data) {
    return data;
  }

  return notFound();
};

function Name({ params }) {
  const data = getData(params.name);

  return (
    <div>
      {data.map((dt) => {
        return (
          <div>
            <h1> {dt.title} </h1>
          </div>
        );
      })}
    </div>
  );
}

export default Name;
