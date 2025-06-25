import { Router } from "express";
import { authorize } from "../middleware/auth.middleware.js";
import {
  getAllOrders,
  getOrderHistory,
  getOrder,
  createOrder,
} from "../controllers/orders.controller.js";

const orderRouter = Router();

orderRouter.get("/", getAllOrders); // get all orders;
orderRouter.get("/user", authorize, getOrderHistory); // get order history for a user;
orderRouter.get("/user/pendingOrders", authorize, getPendingOrders);
orderRouter.get("/:orderId", authorize, getOrder); // get a specific order;

orderRouter.post("/", authorize, createOrder); // create order;

export default orderRouter;
