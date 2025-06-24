import express, { urlencoded } from "express";
import { connectToDB } from "./database/mongodb.js";
import cors from "cors";
import { PORT } from "./config/env.js";
import userRouter from "./routes/users.routes.js";
import productRouter from "./routes/products.routes.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

// general middlewares;
app.use(express.json());
app.use(urlencoded({ extended: false }));
app.use(
  cors({
    origin: "*",
  })
);

// routes;
app.use("/api/v1/users", userRouter);
app.use("/api/v1/products", productRouter);
app.use("/api/v1/auth", authRouter);

app.listen(PORT, async () => {
  console.log(`Server started on port: ${PORT}`);

  await connectToDB();
});
