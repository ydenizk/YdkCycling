import connectToDb from "../../../utils/db";
import Race from "@/app/models/Race";
import { NextResponse } from "next/server";

export const GET = async (request,{params}) => {

    const {id}=params
  try {
    await connectToDb();
    const race = await Race.findById(id);
    return new NextResponse(JSON.stringify(race), { status: 200 });
  } catch (err) {
    return new NextResponse("database error...", { status: 500 });
  }
};
