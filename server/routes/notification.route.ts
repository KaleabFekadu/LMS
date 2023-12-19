import express from "express";
import { authorizeRole, isAutheticated } from "../middleware/auth";
import {
  getNotifications,
  updateNotification,
} from "../controllers/notification.controller";
import { updateAccessToken } from "../controllers/user.controller";
const notficationRoute = express.Router();

notficationRoute.get(
  "/get-all-notifications",
  updateAccessToken,
  isAutheticated,
  authorizeRole("admin"),
  getNotifications
);

notficationRoute.put(
  "/update-notification/:id",
  updateAccessToken,
  isAutheticated,
  authorizeRole("admin"),
  updateNotification
);
export default notficationRoute;
