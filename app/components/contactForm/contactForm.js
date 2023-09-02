"use client";

import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

 
    } catch (error) {
      console.log(error);
    }



  };

   

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 justify-center items-center 
          w-full max-w-[540px] mx-auto my-0 bg-[#222] rounded p-2 px-6 flex-1 "
      >
        <div className=" w-[400px]">
          <label htmlFor="name" className="my-1 ">
            Name
          </label>
          <input
            className="w-[400px] h-12 text-orange-950 text-lg rounded border-none outline-0 bg-stone-300"
            type="text"
            id="name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email" className="my-1 ">
            Email
          </label>
          <br />
          <input
            required
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="text"
            className="w-[400px] h-12 text-orange-950 text-lg rounded border-none outline-0 bg-stone-300"
          />
        </div>
        <div className="lg:text-center">
          <label className="my-1 " htmlFor="message">
            Your Message
          </label>
          <textarea
            required
            onChange={(e) => setMessage(e.target.value)}
            id="message"
            cols="39"
            rows="8"
            className="rounded text-orange-950 bg-stone-300 "
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full max-w-[400px] rounded bg-green-700 hover:bg-green-800 transition mb-4 py-2 tracking-wide text-xl cursor-pointer  text-stone-200"
        >
          Send
        </button>
      </form>
    </>
  );
}

export default ContactForm;
