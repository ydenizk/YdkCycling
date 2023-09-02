import React from "react";
import ContactForm from "../components/contactForm/contactForm";

export const metadata = {
  title: "Contact",
  description: "Cycling Road races of Season",
  keywords: "web design, javascript,react, nextjs,tailwind,css",
};




function ContactPage() {
  return (
    <main className=" w-full max-w-screen-lg flex justify-center items-center  ">
      <div className="w-full max-w-[600px] p-4 mt-16 flex  justify-evenly  gap-24 lg:flex-col lg:gap-12 sm:w-[480px] ">
        <div className="flex-1 w-full text-left">
          <h1 className="text-7xl font-semibold text-left  w-full leading-20 sm:text-5xl sm:text-center">
            Please ask or share anything with us.{" "}
          </h1>
        </div>
        <ContactForm />
      </div>
    </main>
  );
}

export default ContactPage;
