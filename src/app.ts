import express, { NextFunction, Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { userRouter } from "./app/modules/users/user.route";
import { layoutRouter } from "./app/modules/layout/layout.route";
import { courseRouter } from "./app/modules/course/course.route";
import { notificationRouter } from "./app/modules/notification/notification.route";
import { ErrorMiddleware } from "./app/middleware/error";

// import { userRouter } from "../modules/users/user.route";
// import { analyticsRouter } from "./app/modules/analytics/analytics.route";
// import { layoutRouter } from "../modules/layout/layout.route";
// import { courseRouter } from "../modules/course/course.route";
// import { orderRouter } from "./app/modules/order/order.route";
// import { notificationRouter } from "../modules/notification/notification.route";
// import { ErrorMiddleware } from "./app/middleware/error";

export const app = express();
require("dotenv").config();

app.use(express.json());

app.use(cookieParser());
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);
app.use("/api/v1", userRouter, layoutRouter);
app.use("/api/v1", courseRouter);
// app.use("/api/v1", orderRouter);
app.use("/api/v1", notificationRouter);

app.get("/", (req, res) => {
  res.send("All OK");
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  const err = new Error(`route ${req.originalUrl} not found`) as any;
  err.statsCode = 404;
  next(err);
});

app.use(ErrorMiddleware);
