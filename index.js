import express from "express";
import cors from "cors";
import { config } from "dotenv";
import productRoutes from "./routes/productRoute.js";

const app = express();
app.use(cors());

config();

const port = process.env.PORT || 3001;

app.use(express.json());

app.use("/api/product", productRoutes);

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
