import express from "express";
import { authorizeRole, isAutheticated } from "../middleware/auth";
import {
  editCourse,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
} from "../controllers/course.controller";
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

courseRouter.get("/get-course/:id", getSingleCourse);

courseRouter.get("/get-courses", getAllCourses);

courseRouter.get("/get-course-content/:id", isAutheticated, getCourseByUser);

export default courseRouter;