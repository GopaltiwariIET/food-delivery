import express from "express";
import cors from "cors";
import { connectDB } from "../db.js";
import foodRouter from "../routes/foodRoute.js";
import userRouter from "../routes/userRoute.js";
import "dotenv/config";
import cartRouter from "../routes/cartRoute.js";
import orderRouter from "../routes/orderRoute.js";

// app config
const app = express();

// middleware
app.use(express.json());
app.use(cors({ origin: "*" }));

// db connection
connectDB();

// api endpoints
app.use("api/food", foodRouter);
app.use("images", express.static("uploads"));
app.use("api/user", userRouter);
app.use("api/cart", cartRouter);
app.use("api/order", orderRouter);

app.get("/", (req, res) => {
  res.send("API Working");
});

export default app;

// YOU CAN SAVE UR DATABASE IN THIS COMMENT IF U WANT -->
