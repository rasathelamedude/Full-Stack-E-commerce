import { Router } from "express";
import { authorize } from "../middleware/auth.middleware.js";
import {
  getAllProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const productRouter = Router();

productRouter.get("/", getAllProducts); // get all the products
productRouter.get("/:productId", authorize, getProduct); // get a specific router

productRouter.post("/", authorize, createProduct); // create product

productRouter.patch("/:productId", authorize, updateProduct); // update product

productRouter.delete("/:productId", authorize, deleteProduct); // delete product

export default productRouter;
