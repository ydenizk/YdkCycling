/* import mongoose from "mongoose"

const connect = async ()=>{



try {
  await mongoose.connect(process.env.MONGO);
} catch (error) {
throw new Error("connection failed..")
}
}

export default connect */
/* ........................................... */


 import mongoose from "mongoose";

let isConnected = false;

const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
  } catch (error) {
    isConnected = false;
  }
};

export default connectToDb;


/* import mongoose from "mongoose";

const connectToDB = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
      await mongoose.connect(process.env.MONGO);
      console.log("db connected");
    }
  } catch (error) {
    console.log(error);
  }
};

export default connectToDB; */