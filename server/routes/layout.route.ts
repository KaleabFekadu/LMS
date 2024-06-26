import express from "express";
import { authorizeRole, isAutheticated } from "../middleware/auth";
import {
  createLayout,
  editLayout,
  getLayoutByType,
} from "../controllers/layout.controller";
import { updateAccessToken } from "../controllers/user.controller";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  updateAccessToken,
  isAutheticated,
  authorizeRole("admin"),
  createLayout
);

layoutRouter.put(
  "/edit-layout",
  updateAccessToken,
  isAutheticated,
  authorizeRole("admin"),
  editLayout
);

layoutRouter.get("/get-layout/:type", getLayoutByType);

export default layoutRouter;
