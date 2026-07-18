import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
const app = express();
app.use("/api/auth", authRoutes);
import orderRoutes from "./routes/orderRoutes.js";
dotenv.config();






app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());

app.use(cookieParser());




app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Visibility Agency API Running 🚀",
  });
});

app.use("/api/order", orderRoutes);

export default app;