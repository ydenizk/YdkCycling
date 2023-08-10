import React from "react";
import ContactForm from "../components/contactForm/contactForm";

function ContactPage() {
  return (
    <main className=" w-full max-w-screen-lg flex justify-center items-center  ">
      <div className="w-full max-w-[600px] p-4 mt-16 flex  justify-evenly  gap-24 ">
        <div className="flex-1 w-full text-left">
          <h1 className="text-7xl font-semibold text-left  w-full leading-20">
            Please ask or share with us anything.{" "}
          </h1>
        </div>
       <ContactForm />
      </div>
    </main>
  );
}

export default ContactPage;
