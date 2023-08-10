import connectToDb from "@/app/utils/db";
import { NextResponse } from "next/server";
import Contact from "@/app/models/contact";
import mongoose from "mongoose";

export const POST = async (request) => {
  const { name, email, message } = await request.json();

  try {
    await connectToDb();
    await Contact.create({ name, email, message });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        errorList.push(error.errors[e].message);
      }
   
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: ["Unable to send message."] });
    }
  }

  return NextResponse.json({ msg: ["hello fom contact form"] });
};
