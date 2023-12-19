import express from "express";
import { authorizeRole, isAutheticated } from "../middleware/auth";
import { createOrder, getAllOrders } from "../controllers/order.controller";
import { updateAccessToken } from "../controllers/user.controller";

const orderRouter = express.Router();

orderRouter.post("/create-order", isAutheticated, createOrder);

orderRouter.get(
  "/get-orders",
  updateAccessToken,
  isAutheticated,
  authorizeRole("admin"),
  getAllOrders
);

export default orderRouter;
