import express from "express";
import {
  createProduct,
  listAndSearchProducts,
} from "../controllers/productController.js";

const router = express.Router();

router.post("/create", createProduct);
router.get("/list", listAndSearchProducts);

export default router;
