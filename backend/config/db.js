import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_DB_URI)
    .then(() => console.log("DataBase Connected"));
};
