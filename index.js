import express from "express";
import { config } from "dotenv";
import productRoutes from "./routes/productRoute.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import { connectDB } from "./db/connection.js";

const app = express();

config();

const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/product", productRoutes);

app.use(errorHandler);

app.listen(port, () => {
  connectDB().catch((err) => {
    console.error("Unable to connect to PostgreSQL:", err);
    process.exit(1);
  });
  console.log(`Server is listening at http://localhost:${port}`);
});
