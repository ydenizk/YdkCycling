import connectToDb from "../../utils/db";
import Race from "@/app/models/Race";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDb();
    const races = await Race.find();
    return new NextResponse(JSON.stringify(races), { status: 200 });
  } catch (err) {
    return new NextResponse("database error...", { status: 500 });
  }
};
 