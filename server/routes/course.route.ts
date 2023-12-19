import express from "express";
import { authorizeRole, isAutheticated } from "../middleware/auth";
import {
  addAnswer,
  addQuestion,
  addReplyToReview,
  addReview,
  deleteCourse,
  editCourse,
  generateVideoUrl,
  getAllCourses,
  getCourseByUser,
  getSingleCourse,
  uploadCourse,
  getAdminAllCourses,
} from "../controllers/course.controller";
import { updateAccessToken } from "../controllers/user.controller";
const courseRouter = express.Router();

courseRouter.post(
  "/create-course",
  updateAccessToken,
  isAutheticated,
  authorizeRole("admin"),
  uploadCourse
);

courseRouter.put(
  "/edit-course/:id",
  updateAccessToken,
  isAutheticated,
  authorizeRole("admin"),
  editCourse
);

courseRouter.get("/get-course/:id", getSingleCourse);

courseRouter.get("/get-courses", getAllCourses);

courseRouter.get(
  "/get-admin-courses",
  isAutheticated,
  authorizeRole("admin"),
  getAdminAllCourses
);

courseRouter.get(
  "/get-course-content/:id",
  updateAccessToken,
  isAutheticated,
  getCourseByUser
);

courseRouter.put(
  "/add-question",
  updateAccessToken,
  isAutheticated,
  addQuestion
);

courseRouter.put("/add-answer", updateAccessToken, isAutheticated, addAnswer);

courseRouter.put(
  "/add-review/:id",
  updateAccessToken,
  isAutheticated,
  addReview
);

courseRouter.put(
  "/add-reply",
  updateAccessToken,
  isAutheticated,
  authorizeRole("admin"),
  addReplyToReview
);

courseRouter.put(
  "/get-courses",
  updateAccessToken,
  isAutheticated,
  authorizeRole("admin"),
  getAllCourses
);

courseRouter.post("/getVdoCipherOTP", generateVideoUrl);

courseRouter.delete(
  "/delete-course/:id",
  updateAccessToken,
  isAutheticated,
  authorizeRole("admin"),
  deleteCourse
);
export default courseRouter;
