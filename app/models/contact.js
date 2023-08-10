import mongoose from "mongoose";

const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Name must be longer than 2 characters"],
    maxLength: [20, "Name must be shorter than 20 characters"],
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: [true, "Email is required."],
    match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
  },
  message: {
    type: String,
    required: [true, "Message is required."],
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

 export default  mongoose.models.Contact || mongoose.model("Contact", contactSchema);


