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
      return new NextResponse("Database Error.....", { status: 500 });
  }

  return NextResponse.json({ msg: ["hello fom contact form"] });
};
