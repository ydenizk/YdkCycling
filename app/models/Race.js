import mongoose from "mongoose";

const { Schema } = mongoose;

const raceSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  
  }
);

//If the Post collection does not exist create a new one.
export default mongoose.models.Race || mongoose.model("Race", raceSchema);
