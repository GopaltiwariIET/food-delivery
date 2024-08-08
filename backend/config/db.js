import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose
      .connect(
        "mongodb+srv://gopalkatiyar2311:gopalkatiyar@cluster0.kqwgdot.mongodb.net/")
      .then(() => console.log("DataBase Connected"));
}