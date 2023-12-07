import express from "express";
import { authorizeRole, isAutheticated } from "../middleware/auth";
import { editCourse, uploadCourse } from "../controllers/course.controller";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  isAutheticated,
  authorizeRole("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  isAutheticated,
  authorizeRole("admin"),
  editCourse
);

export default courseRouter;
