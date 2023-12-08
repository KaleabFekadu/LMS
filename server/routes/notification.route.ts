import express from "express";
import { authorizeRole, isAutheticated } from "../middleware/auth";
import {
  getNotifications,
  updateNotification,
} from "../controllers/notification.controller";
const notficationRoute = express.Router();

notficationRoute.get(
  "/get-all-notifications",
  isAutheticated,
  authorizeRole("admin"),
  getNotifications
);

notficationRoute.put(
  "/update-notification/:id",
  isAutheticated,
  authorizeRole("admin"),
  updateNotification
);
export default notficationRoute;
