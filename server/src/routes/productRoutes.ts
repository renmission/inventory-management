import { Router } from "express";
import { createProducts, getProducts } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createProducts);

export default router;