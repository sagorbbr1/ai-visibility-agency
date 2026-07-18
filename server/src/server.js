import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/order", orderRoutes);
const PORT = process.env.PORT || 5000;
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "AI Visibility Agency API Running 🚀",
  });
});


app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

export default app;