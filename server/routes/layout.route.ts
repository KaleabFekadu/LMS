import express from "express";
import { authorizeRole, isAutheticated } from "../middleware/auth";
import {
  createLayout,
  editLayout,
  getLayoutByType,
} from "../controllers/layout.controller";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  isAutheticated,
  authorizeRole("admin"),
  createLayout
);

layoutRouter.put(
  "/edit-layout",
  isAutheticated,
  authorizeRole("admin"),
  editLayout
);

layoutRouter.get("/get-layout", getLayoutByType);

export default layoutRouter;
