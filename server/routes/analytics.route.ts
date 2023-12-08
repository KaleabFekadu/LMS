import express from "express";
import { authorizeRole, isAutheticated } from "../middleware/auth";
import {
  getCoursesAnalytics,
  getOrderAnalytics,
  getUserAnalytics,
} from "../controllers/analytics.controller";
const analyticsRouter = express.Router();

analyticsRouter.get(
  "/get-users-analytics",
  isAutheticated,
  authorizeRole("admin"),
  getUserAnalytics
);

analyticsRouter.get(
  "/get-orders-analytics",
  isAutheticated,
  authorizeRole("admin"),
  getOrderAnalytics
);
analyticsRouter.get(
  "/get-courses-analytics",
  isAutheticated,
  authorizeRole("admin"),
  getCoursesAnalytics
);

export default analyticsRouter;
