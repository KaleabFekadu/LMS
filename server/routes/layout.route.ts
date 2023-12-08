import express from "express";
import { authorizeRole, isAutheticated } from "../middleware/auth";
import { createLayout } from "../controllers/layout.controller";

const layoutRouter = express.Router();

layoutRouter.post(
  "/create-layout",
  isAutheticated,
  authorizeRole("admin"),
  createLayout
);

export default layoutRouter;
